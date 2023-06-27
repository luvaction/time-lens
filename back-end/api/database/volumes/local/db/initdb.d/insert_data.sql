-- users 테이블에 테스트 데이터 추가
INSERT INTO `users` (`user_id`, `user_name`, `password`, `email`, `phone`) VALUES
('jyk', '김재엽', '123', 'jyk@example.com', '010-1234-5678'),
('vayne', '베인', '123', 'vayne@example.com', '010-1234-5678'),
('hong', '홍길동', '123', 'hong@example.com', '010-1234-5678');

-- contracts 테이블에 테스트 데이터 추가
INSERT INTO `contracts` (`contract_id`, `user_id`, `contract_name`, `start_date`, `end_date`) VALUES
('contract1', 'jyk', '김재엽 계약', '2023-01-01', '2055-12-31'),
('contract2', 'hong', '홍길동 계약', '2023-01-01', '2023-12-31');

-- products 테이블에 테스트 데이터 추가
INSERT INTO `products` (`product_name`, `price`) VALUES
('테스트 제품', 10000.00);

-- invoices 테이블에 테스트 데이터 추가
INSERT INTO `invoices` (`user_id`) VALUES
('jyk');

-- invoice_items 테이블에 테스트 데이터 추가
INSERT INTO `invoice_items` (`invoice_id`, `product_id`, `quantity`) VALUES
(1, 1, 10);

-- cars 테이블에 테스트 데이터 추가
INSERT INTO `cars` (`user_id`, `car_make`, `car_model`, `car_year`) VALUES
('jyk', '삼국지', '적토마', 3023),
('hong', '현대', '아반떼', 2023);
