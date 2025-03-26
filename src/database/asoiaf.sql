DROP TABLE IF EXISTS quotes;

CREATE TABLE quotes (
	id SERIAL NOT NULL PRIMARY KEY ,
	character VARCHAR(45) NOT NULL,
	quote VARCHAR(500) NOT NULL
);

INSERT INTO quotes (character, quote) VALUES
    ('Eddard Stark', 'If you would take a man''s life, you owe it to him to look into his eyes and hear his final words. And if you cannot bear to do that, then perhaps the man does not deserve to die.'),
    ('Eddard Stark', 'A ruler who hides behind paid executioners soon forgets what death is.'),
    ('Tyrion Lannister', 'Never forget what you are, for surely the world will not. Make it your strength. Then it can never be your weakness. Armor yourself in it, and it will never be used to hurt you.'),
    ('Tyrion Lannister', 'My mind is my weapon. My brother has his sword, King Robert has his warhammer, and I have my mind... And a mind needs books as a sword needs a whetstone, if it is to keep its edge.'),
    ('Catelyn Stark', 'He was always clever, even as a boy, but it is one thing to be clever and another to be wise.');

SELECT COUNT(*) AS total_quotes FROM public.quotes;