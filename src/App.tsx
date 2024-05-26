import { useState, Fragment, useEffect } from 'react';
import { ContainMain } from './components/ContainMain';
import { ContainSecondary } from './components/ContainSecondary';
import { FormAddPerson } from './components/FormAddPerson';
import { ContainAddedPerson } from './components/ContainAddedPerson';
import { Row } from './components/Row';
import { RowLoading } from './components/RowLoading';
import { fetchGetPeople } from './services/person';
import './App.css';

function App() {

  const [peopleList, setPeopleList] = useState<Person[]>([])
  const [loaded, setLoaded] = useState<boolean>(true)

  useEffect(() => {
    setLoaded(false);
    fetchGetPeople()
      .then(people => setPeopleList(people));
    setLoaded(true);
  }, []);

  return (
    <Fragment>
      <ContainMain>
        <ContainSecondary>
          <FormAddPerson
            setPeopleList={setPeopleList} />
          <ContainAddedPerson>
            {loaded && peopleList.map(person => (
              <Row
                key={person.id}
                person={person}
              />
            ))}
            {!loaded && <RowLoading />}
            {(peopleList.length === 0) && <h2>No hay personas registradas</h2>}
          </ContainAddedPerson>
        </ContainSecondary>
      </ContainMain>
    </Fragment>
  )
}

export default App
