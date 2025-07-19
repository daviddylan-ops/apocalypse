CREATE TABLE services (
    service_id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    subtitle VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    base_price DECIMAL(10,2) NOT NULL,
    color_class VARCHAR(50) NOT NULL,
    bg_gradient_class VARCHAR(100) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO services (title, subtitle, description, base_price, color_class, bg_gradient_class) VALUES
('DIGITAL OBLITERATION', 'Brand Identity Design', 'We annihilate bland corporate aesthetics and reconstruct radical visual identities that pierce through the digital noise.', 5000.00, 'border-burn-orange text-burn-orange', 'from-burn-orange/10 to-transparent'),
('CYBER RENAISSANCE', 'Web Development', 'Websites that bleed pixels and breathe code. Interactive experiences that challenge reality and redefine user engagement.', 8000.00, 'border-cyber-blue text-cyber-blue', 'from-cyber-blue/10 to-transparent'),
('VISUAL WARFARE', 'UI/UX Design', 'Interfaces that wage war against convention. User experiences that transform confusion into enlightenment.', 6000.00, 'border-toxic-purple text-toxic-purple', 'from-toxic-purple/10 to-transparent'),
('CONTENT APOCALYPSE', 'Creative Direction', 'We orchestrate visual chaos that tells stories, creates movements, and destroys creative barriers.', 4000.00, 'border-neon-green-400 text-neon-green-400', 'from-neon-green-400/10 to-transparent');


CREATE TABLE service_features (
    feature_id SERIAL PRIMARY KEY,
    service_id INTEGER REFERENCES services(service_id),
    feature_text VARCHAR(255) NOT NULL,
    display_order INTEGER NOT NULL
);

INSERT INTO service_features (service_id, feature_text, display_order) VALUES
(1, 'Logo Deconstruction', 1),
(1, 'Visual System Architecture', 2),
(1, 'Brand Mythology Creation', 3),
(2, 'Responsive Destruction', 1),
(2, 'Interactive Nightmares', 2),
(2, 'Performance Optimization', 3),
(3, 'Prototype Annihilation', 1),
(3, 'User Journey Mapping', 2),
(3, 'Accessibility Revolution', 3),
(4, 'Campaign Devastation', 1),
(4, 'Art Direction', 2),
(4, 'Content Strategy', 3);



CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(100),
    role VARCHAR(20) CHECK (role IN ('admin', 'client')) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP
);

INSERT INTO users (username, email, password_hash, full_name, role) VALUES
('admin', 'admin@apocalypse.design', '$2a$12$xyz123...', 'System Admin', 'admin'),
('neon_client', 'client@neoncorp.io', '$2a$12$abc456...', 'Neon Corporation', 'client'),
('cyberpunk99', 'john@cyberpunk.net', '$2a$12$def789...', 'John Cyberpunk', 'client');


CREATE TABLE projects (
    project_id SERIAL PRIMARY KEY,
    client_id INTEGER REFERENCES users(user_id),
    service_id INTEGER REFERENCES services(service_id),
    project_name VARCHAR(100) NOT NULL,
    description TEXT,
    status VARCHAR(20) CHECK (status IN ('pending', 'active', 'completed', 'cancelled')) DEFAULT 'pending',
    start_date DATE,
    end_date DATE,
    budget DECIMAL(10,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO projects (client_id, service_id, project_name, description, status, budget) VALUES
(2, 1, 'Neon Corp Rebrand', 'Complete visual identity overhaul for Neon Corporation', 'active', 7500.00),
(3, 2, 'Cyberpunk Web Portal', 'Interactive web experience for cyberpunk community', 'pending', 10000.00),
(2, 3, 'Neon Dashboard UI', 'New UI for internal analytics dashboard', 'completed', 6500.00);


CREATE TABLE testimonials (
    testimonial_id SERIAL PRIMARY KEY,
    project_id INTEGER REFERENCES projects(project_id),
    client_id INTEGER REFERENCES users(user_id),
    content TEXT NOT NULL,
    rating INTEGER CHECK (rating BETWEEN 1 AND 5),
    is_featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO testimonials (project_id, client_id, content, rating, is_featured) VALUES
(1, 2, 'Apocalyptic Designs completely transformed our brand identity beyond recognition. The digital obliteration was exactly what we needed!', 5, TRUE),
(3, 2, 'The UI warfare waged on our dashboard resulted in the most beautiful destruction we could imagine. 10/10 would apocalypse again.', 4, TRUE);



CREATE TABLE team_members (
    member_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    role VARCHAR(100) NOT NULL,
    bio TEXT,
    specialty VARCHAR(100),
    avatar_url VARCHAR(255),
    is_active BOOLEAN DEFAULT TRUE,
    joined_date DATE NOT NULL
);

INSERT INTO team_members (name, role, bio, specialty, joined_date) VALUES
('Dylan Cyber', 'Lead Designer', 'Digital demolition expert with 10 years of experience in brand annihilation', 'Visual Warfare', '2020-01-15'),
('Neon Sarah', 'Full-Stack Dev', 'Code poet who crafts interactive nightmares in React and Three.js', 'Cyber Renaissance', '2021-03-22'),
('Rusty Pixel', 'Creative Director', 'Overseer of the content apocalypse and master of creative chaos', 'Content Strategy', '2019-11-05');