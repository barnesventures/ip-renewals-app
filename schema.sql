-- Users table
CREATE TABLE IF NOT EXISTS users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  is_operator BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- IP assets table
CREATE TABLE IF NOT EXISTS ip_assets (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  type VARCHAR(50) NOT NULL CHECK (type IN ('patent', 'trademark', 'copyright')),
  title VARCHAR(255) NOT NULL,
  registration_number VARCHAR(255),
  filing_date DATE,
  expiry_date DATE,
  renewal_date DATE,
  status VARCHAR(50) DEFAULT 'active' CHECK (status IN ('active', 'expired', 'pending', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Renewals table
CREATE TABLE IF NOT EXISTS renewals (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  ip_asset_id UUID NOT NULL REFERENCES ip_assets(id) ON DELETE CASCADE,
  renewal_date DATE NOT NULL,
  due_date DATE NOT NULL,
  completed_date DATE,
  status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'failed', 'cancelled')),
  amount DECIMAL(10, 2),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Notifications table
CREATE TABLE IF NOT EXISTS notifications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  type VARCHAR(50) NOT NULL,
  title VARCHAR(255) NOT NULL,
  message TEXT,
  read BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes
CREATE INDEX idx_ip_assets_user_id ON ip_assets(user_id);
CREATE INDEX idx_ip_assets_renewal_date ON ip_assets(renewal_date);
CREATE INDEX idx_renewals_ip_asset_id ON renewals(ip_asset_id);
CREATE INDEX idx_renewals_status ON renewals(status);
CREATE INDEX idx_notifications_user_id ON notifications(user_id);
CREATE INDEX idx_notifications_read ON notifications(read);

-- Create an operator user (password: operator123)
-- Note: You should change this password after first login
INSERT INTO users (email, name, password_hash, is_operator)
VALUES ('operator@ip-renew.com', 'System Operator', '$2b$10$4iewCStvHYCMwJmAjkNBieQ8/EaCku3b7UWFsyAdW9bu9oy9RTp2e', true)
ON CONFLICT (email) DO NOTHING;