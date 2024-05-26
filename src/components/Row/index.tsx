import './Row.css';

interface RowProps {
    person: Person
}

function Row({ person }: RowProps) {
    return (
        <div className="registro-persona">
            <span>{person.id}</span>
            <span>{person.first_name}</span>
            <span>{person.second_name}</span>
            <span>{person.first_last_name}</span>
            <span>{person.second_last_name}</span>
            <span>{person.date_birth}</span>
            <span>{person.type_identification}</span>
            <span>{person.num_identification}</span>
            <span>{(person.is_head_household) ? "Sí" : "No"}</span>
        </div>
    );
}

export { Row };