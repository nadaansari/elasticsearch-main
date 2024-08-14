-- Table: public.publication

-- DROP TABLE IF EXISTS public.publication;

CREATE TABLE IF NOT EXISTS public.publication
(
    idp bigint NOT NULL DEFAULT nextval('publication_idp_seq'::regclass),
    pcontenu character varying(255) COLLATE pg_catalog."default",
    date timestamp(6) without time zone,
    tag character varying(255) COLLATE pg_catalog."default",
    username_utilisateur character varying(255) COLLATE pg_catalog."default",
    score integer,
    title character varying(255) COLLATE pg_catalog."default",
    modification_time TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    insertion_time TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT publication_pkey PRIMARY KEY (idp),
    CONSTRAINT fkje9qdatl9c0swo8e6jrmltchj FOREIGN KEY (username_utilisateur)
        REFERENCES public.utilisateur (username) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.publication
    OWNER to postgres;

-- Trigger function to update modification_time on row update
CREATE OR REPLACE FUNCTION update_modification_time_publication()
RETURNS TRIGGER AS $$
BEGIN
    NEW.modification_time = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to invoke the function before each update
CREATE TRIGGER update_modification_time_trigger_publication
BEFORE UPDATE ON public.publication
FOR EACH ROW
EXECUTE FUNCTION update_modification_time_publication();
