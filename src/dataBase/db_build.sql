BEGIN;
    DROP TABLE IF EXISTS journalists ,news;
    CREATE TABLE journalists
    (
        id SERIAL PRIMARY KEY,
        fullname TEXT,
        email VARCHAR(50),
        password VARCHAR
    );
    CREATE TABLE news
    (
        id SERIAL PRIMARY KEY,
        title TEXT,
        descriptions text ,
        field text,
        jour_id INTEGER REFERENCES journalists(id)
    );
        INSERT INTO journalists (fullname ,email,password)VALUES
        ('jamalat','jamalat@gmial.com','123'),
        ('fatama','fatma@gmail,.com','123');

        INSERT INTO  news (title ,descriptions,field,jour_id) VALUES 
        ('The utter absurdity of Trumps July Fourth bash','HOLD THE DATE! We will be having one of the biggest gatherings in the history of Washington, D.C., on July 4th. It will be called a Salute To America and will be held at the Lincoln Memorial. Major fireworks display, entertainment and an address by your favorite President, me!', 'politics',1),
        ('The utter absurdity of Trumps July Fourth bash','HOLD THE DATE! We will be having one of the biggest gatherings in the history of Washington, D.C., on July 4th. It will be called a Salute To America and will be held at the Lincoln Memorial. Major fireworks display, entertainment and an address by your favorite President, me!', 'politics',2);

    COMMIT;