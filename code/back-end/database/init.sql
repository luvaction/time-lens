CREATE DATABASE IF NOT EXISTS `time_lens`;
USE `time_lens`;

CREATE TABLE IF NOT EXISTS `users` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `user_id` VARCHAR(50) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `name` VARCHAR(50) NOT NULL,
  `nickname` VARCHAR(50) NOT NULL,
  `sex` ENUM('male', 'female', 'other') NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `address` VARCHAR(200)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='서비스 사용자';

CREATE TABLE IF NOT EXISTS `plans` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(100) NOT NULL,
  `description` TEXT,
  `type` ENUM('study', 'work', 'training', 'custom') NOT NULL,
  `start_date` DATE NOT NULL,
  `end_date` DATE NOT NULL,
  `user_id` INT
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='계획';

CREATE TABLE IF NOT EXISTS `tasks` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(100) NOT NULL,
  `description` TEXT,
  `start_date` DATE NOT NULL,
  `end_date` DATE NOT NULL,
  `plan_id` INT
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='작업';

CREATE TABLE IF NOT EXISTS `templates` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(50) NOT NULL,
  `description` TEXT,
  `content` TEXT,
  `user_id` INT
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='템플릿';

CREATE TABLE IF NOT EXISTS `payments` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `user_id` INT NOT NULL,
  `subscription_id` INT NOT NULL,
  `amount` DECIMAL(10, 2) NOT NULL,
  `payment_date` DATE NOT NULL,
  `payment_active` BOOLEAN NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='결제';

CREATE TABLE IF NOT EXISTS `subscriptions` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(50) NOT NULL,
  `price` DECIMAL(10, 2) NOT NULL,
  `duration` INT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='구독';

CREATE TABLE IF NOT EXISTS `permissions` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(50) NOT NULL,
  `description` TEXT
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='권한';

CREATE TABLE IF NOT EXISTS `code_class` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `code_class_id` INT NOT NULL,
  `name` VARCHAR(50) NOT NULL,
  `description` TEXT
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='각종코드 분류';

CREATE TABLE IF NOT EXISTS `codes` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `code_class_id` INT NOT NULL,
  `code_id` INT NOT NULL,
  `name` VARCHAR(50) NOT NULL,
  `description` TEXT,
  FOREIGN KEY (code_class_id) REFERENCES code_class(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='각종코드';

CREATE TABLE IF NOT EXISTS `sessions` (
  `user_id` INT NOT NULL,
  `token` VARCHAR(100) NOT NULL,
  `expiration_date` DATETIME NOT NULL,
  `active` BOOLEAN NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='세션';
