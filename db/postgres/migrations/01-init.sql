CREATE TABLE logs (
    id UUID PRIMARY KEY,
    delivery VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    locker_id UUID NOT NULL,
    password VARCHAR(100) NOT NULL
);