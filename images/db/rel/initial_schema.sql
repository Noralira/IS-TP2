CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS POSTGIS;
CREATE EXTENSION IF NOT EXISTS POSTGIS_TOPOLOGY;

CREATE TABLE public.teams (
	id              uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
	name            VARCHAR(250) NOT NULL,
	created_on      TIMESTAMP NOT NULL DEFAULT NOW(),
	updated_on      TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE public.countries (
	id              uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
	name            VARCHAR(250) UNIQUE NOT NULL,
	geom            GEOMETRY,
	created_on      TIMESTAMP NOT NULL DEFAULT NOW(),
	updated_on      TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE public.players (
	id              uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
	name            VARCHAR(250) NOT NULL,
	age             INT NOT NULL,
	team_id         uuid,
	country_id      uuid NOT NULL,
	created_on      TIMESTAMP NOT NULL DEFAULT NOW(),
	updated_on      TIMESTAMP NOT NULL DEFAULT NOW()
);

ALTER TABLE players
    ADD CONSTRAINT players_countries_id_fk
        FOREIGN KEY (country_id) REFERENCES countries
            ON DELETE CASCADE;

ALTER TABLE players
    ADD CONSTRAINT players_teams_id_fk
        FOREIGN KEY (team_id) REFERENCES teams
            ON DELETE SET NULL;

CREATE TABLE public.airlines (
	id              uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
	name            VARCHAR(250) NOT NULL,
	created_on      TIMESTAMP NOT NULL DEFAULT NOW(),
	updated_on      TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE public.routes (
	id              uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
	destination     VARCHAR(250) NOT NULL,
	source          VARCHAR(250) NOT NULL,
	created_on      TIMESTAMP NOT NULL DEFAULT NOW(),
	updated_on      TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE public.classes (
	id              uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
	name            VARCHAR(250) NOT NULL,
	created_on      TIMESTAMP NOT NULL DEFAULT NOW(),
	updated_on      TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE public.times_fligths (
	id              uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
	name            VARCHAR(250) NOT NULL,
	id_fligths 		uuid NOT NULL,
	id_times 		uuid NOT NULL,
	duration		FLOAT,
	days            INT NOT NULL,
	created_on      TIMESTAMP NOT NULL DEFAULT NOW(),
	updated_on      TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE public.times (
	id              uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
	departure       VARCHAR(250) NOT NULL,
	arrival 		VARCHAR(250) NOT NULL,
	created_on      TIMESTAMP NOT NULL DEFAULT NOW(),
	updated_on      TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE public.flights (
	id              uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
	name       		VARCHAR(250) NOT NULL,
	id_airline 		uuid NOT NULL,
	id_routes 		uuid NOT NULL,
	id_classes 		uuid NOT NULL,
	id_times 		uuid NOT NULL,
	price			FLOAT NOT NULL,
	stops			VARCHAR(250) NOT NULL,		
	created_on      TIMESTAMP NOT NULL DEFAULT NOW(),
	updated_on      TIMESTAMP NOT NULL DEFAULT NOW()
);
--airlines
	-- id
	--name 
	--created_on 
	--updated_on

--routes
	--id
	--destination
	--source
	--created_on 
	--updated_on

-- classes
	-- id
	--name
	--created_on 
	--updated_on

--times_fligths
	-- id
	-- id_fligth PK
	-- id_times PK
	--duration
	--days
	--created_on 
	--updated_on

--times
	-- id
	--departure
	--arrival
	--created_on 
	--updated_on

--fligths
	-- id
	-- name
	-- id_airline
	-- id_routes
	-- price
	-- id_classes
	-- stops
	-- id_times
	--created_on 
	--updated_on



