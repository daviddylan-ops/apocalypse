// Gaming Platform Express Server
import express from "express";
import mysql from "mysql";
import cors from "cors";

// Database Connection Configuration
const dbConn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "reddriot",
  port: 3307,
  database: "art class",
});

// Test database connection
dbConn.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err.message);
    return;
  }
  console.log("✅ Database connected successfully");
});

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Set EJS as template engine
app.set("view engine", "ejs");

// Root route - redirect to dashboard
app.get("/", (req, res) => {
  res.redirect("/dashboard");
});

// Dashboard route - fetch all data for summary
app.get("/dashboard", (req, res) => {
  dbConn.query("SELECT * FROM users", function (usersErr, users) {
    if (usersErr)
      return res
        .status(500)
        .json({ message: "Server Error", error: usersErr.message });
    dbConn.query("SELECT * FROM services", function (servicesErr, services) {
      if (servicesErr)
        return res
          .status(500)
          .json({ message: "Server Error", error: servicesErr.message });
      dbConn.query("SELECT * FROM projects", function (projectsErr, projects) {
        if (projectsErr)
          return res
            .status(500)
            .json({ message: "Server Error", error: projectsErr.message });
        dbConn.query(
          "SELECT * FROM testimonials",
          function (testimonialsErr, testimonials) {
            if (testimonialsErr)
              return res.status(500).json({
                message: "Server Error",
                error: testimonialsErr.message,
              });
            dbConn.query(
              "SELECT * FROM team_members",
              function (teamErr, teamMembers) {
                if (teamErr)
                  return res.status(500).json({
                    message: "Server Error",
                    error: teamErr.message,
                  });
                res.render("dashboard.ejs", {
                  users,
                  services,
                  projects,
                  testimonials,
                  teamMembers,
                });
              }
            );
          }
        );
      });
    });
  });
});

// Users API routes
app.get("/api/users", (req, res) => {
  dbConn.query("SELECT * FROM users", (err, users) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Server Error", error: err.message });
    }
    res.json(users);
  });
});

app.post("/api/users", (req, res) => {
  const { username, email, password_hash, full_name, role } = req.body;
  const query =
    "INSERT INTO users (username, email, password_hash, full_name, role) VALUES (?, ?, ?, ?, ?)";
  dbConn.query(
    query,
    [username, email, password_hash, full_name, role],
    (err, result) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Server Error", error: err.message });
      }
      res
        .status(201)
        .json({ message: "User created successfully", id: result.insertId });
    }
  );
});

// Services API routes
app.get("/api/services", (req, res) => {
  dbConn.query("SELECT * FROM services", (err, services) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Server Error", error: err.message });
    }
    res.json(services);
  });
});

app.get("/api/services/:id", (req, res) => {
  const serviceId = req.params.id;
  dbConn.query(
    "SELECT * FROM services WHERE service_id = ?",
    [serviceId],
    (err, service) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Server Error", error: err.message });
      }
      if (service.length === 0) {
        return res.status(404).json({ message: "Service not found" });
      }
      res.json(service[0]);
    }
  );
});

// Projects API routes
app.get("/api/projects", (req, res) => {
  dbConn.query("SELECT * FROM projects", (err, projects) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Server Error", error: err.message });
    }
    res.json(projects);
  });
});

app.post("/api/projects", (req, res) => {
  const { client_id, service_id, project_name, description, status, budget } =
    req.body;
  const query =
    "INSERT INTO projects (client_id, service_id, project_name, description, status, budget) VALUES (?, ?, ?, ?, ?, ?)";
  dbConn.query(
    query,
    [client_id, service_id, project_name, description, status, budget],
    (err, result) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Server Error", error: err.message });
      }
      res
        .status(201)
        .json({ message: "Project created successfully", id: result.insertId });
    }
  );
});

// Testimonials API routes
app.get("/api/testimonials", (req, res) => {
  dbConn.query("SELECT * FROM testimonials", (err, testimonials) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Server Error", error: err.message });
    }
    res.json(testimonials);
  });
});

app.get("/api/testimonials/featured", (req, res) => {
  dbConn.query(
    "SELECT * FROM testimonials WHERE is_featured = TRUE",
    (err, testimonials) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Server Error", error: err.message });
      }
      res.json(testimonials);
    }
  );
});

// Team Members API routes
app.get("/api/team", (req, res) => {
  dbConn.query(
    "SELECT * FROM team_members WHERE is_active = TRUE",
    (err, teamMembers) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Server Error", error: err.message });
      }
      res.json(teamMembers);
    }
  );
});

// Service Features API route
app.get("/api/services/:id/features", (req, res) => {
  const serviceId = req.params.id;
  dbConn.query(
    "SELECT * FROM service_features WHERE service_id = ? ORDER BY display_order",
    [serviceId],
    (err, features) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Server Error", error: err.message });
      }
      res.json(features);
    }
  );
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  dbConn.query("SELECT 1", (err) => {
    if (err) {
      return res
        .status(500)
        .json({ status: "error", message: "Database connection failed" });
    }
    res.json({ status: "healthy", message: "Server and database are running" });
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res
    .status(500)
    .json({ message: "Something went wrong!", error: err.message });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Start server
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`🎮 Gaming Platform Server running on port ${PORT}`);
  console.log(`📊 Dashboard: http://localhost:${PORT}/dashboard`);
  console.log(`📱 API Endpoints available at http://localhost:${PORT}/api`);
  console.log(`🏥 Health check: http://localhost:${PORT}/api/health`);
});

// Graceful shutdown
process.on("SIGINT", () => {
  console.log("\n🛑 Shutting down server...");
  dbConn.end((err) => {
    if (err) {
      console.error("Error closing database connection:", err);
    } else {
      console.log("✅ Database connection closed");
    }
    process.exit(0);
  });
});
