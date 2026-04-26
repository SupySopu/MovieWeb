export type Cast = {
    adult: boolean,
    gender: number,
    id: number,
    known_for_department: string,
    name: string,
    original_name: string,
    popularity: number,
    profile_path: string,
    cast_id: number,
    character: string,
    credit_id: string,
    order: number,
}

export type CastTagLocalProps = {
    id: number,
    name: string,
    character: string,
}

export type CastTagProps = Pick<Cast, "id" | "character" | "name">