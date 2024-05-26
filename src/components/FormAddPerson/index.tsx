import { useEffect, useState } from 'react';
import { fetchCreatePerson, fetchGetPeople, fetchGetTypesIdentification } from '../../services/person';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './FormAddPerson.css';

interface FormAddPersonProps {
  setPeopleList: (list: Person[]) => void;
}

function FormAddPerson({ setPeopleList }: FormAddPersonProps) {

  const [typesIndentification, setTypesIdentification] = useState<TypeIdentification[]>();

  const validationSchema = Yup.object({
    is_head_household: Yup.boolean(),
    first_name: Yup.string()
      .required('Primer Nombre es obligatorio')
      .max(50, 'El Primer Nombre no debe exceder los 50 caracteres'),
    second_name: Yup.string()
      .max(50, 'El Segundo Nombre no debe exceder los 50 caracteres'),
    first_last_name: Yup.string()
      .required('Primer Apellido es obligatorio')
      .max(50, 'El Primer Apellido no debe exceder los 50 caracteres'),
    second_last_name: Yup.string()
      .max(50, 'El Segundo Apellido no debe exceder los 50 caracteres'),
    date_birth: Yup.date()
      .required('Fecha Nacimiento es obligatoria')
      .max(new Date(), 'La Fecha de Nacimiento no puede ser en el futuro'),
    type_identification: Yup.string()
      .required('Tipo Identificación es obligatorio'),
    num_identification: Yup.string()
      .required('Numero Identificación es obligatorio')
      .matches(/^[0-9]+$/, 'Numero Identificación debe ser numérico')
      .max(20, 'El Numero Identificación no debe exceder los 20 caracteres')
  });

  const formik = useFormik<Person>({
    initialValues: {
      id: "",
      first_name: "",
      second_name: "",
      first_last_name: "",
      second_last_name: "",
      date_birth: "",
      type_identification: "",
      num_identification: "",
      is_head_household: false
    },
    validationSchema,
    onSubmit: (values) => handleSubmit(values)
  });

  const handleSubmit = (person: Person): void => {
    fetchCreatePerson(person)
      .then(e => fetchGetPeople()
        .then(people => setPeopleList(people))
      );
  }

  const getTypesIdentification = () => fetchGetTypesIdentification()
    .then(types => {
      setTypesIdentification(types);
    });

  useEffect(() => {
    getTypesIdentification();
  }, []);

  return (
    <div className="panel-formulario-agregar-persona">
      <div className="titulo-panel">
        <h4>CONFORMACIÓN Y CONDICIÓN SOCIOECONOMICA DEL HOGAR</h4>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="contenido-formulario">
          <input
            id="is_head_household"
            name="is_head_household"
            checked={formik.values.is_head_household}
            onChange={formik.handleChange}
            type="checkbox"
          /> Cabeza de hogar
          <div className="inputs-grid">
            <div>
              <label htmlFor="first_name">Primer Nombre *</label>
              <input
                id="first_name"
                name="first_name"
                value={formik.values.first_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Primer Nombre"
              />
              {formik.touched.first_name && formik.errors.first_name ? (
                <div className="error">{formik.errors.first_name}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="second_name">Segundo Nombre</label>
              <input
                id="second_name"
                name="second_name"
                value={formik.values.second_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Segundo Nombre"
              />
              {formik.touched.second_name && formik.errors.second_name ? (
                <div className="error">{formik.errors.second_name}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="first_last_name">Primer Apellido *</label>
              <input
                id="first_last_name"
                name="first_last_name"
                value={formik.values.first_last_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Primer Apellido"
              />
              {formik.touched.first_last_name && formik.errors.first_last_name ? (
                <div className="error">{formik.errors.first_last_name}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="second_last_name">Segundo Apellido</label>
              <input
                id="second_last_name"
                name="second_last_name"
                value={formik.values.second_last_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Segundo Apellido"
              />
              {formik.touched.second_last_name && formik.errors.second_last_name ? (
                <div className="error">{formik.errors.second_last_name}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="date_birth">Fecha Nacimiento *</label>
              <input
                id="date_birth"
                name="date_birth"
                value={formik.values.date_birth}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="date"
                placeholder="Fecha Nacimiento"
              />
              {formik.touched.date_birth && formik.errors.date_birth ? (
                <div className="error">{formik.errors.date_birth}</div>
              ) : null}
            </div>
          </div>
          <div className="inputs-grid">
            <div>
              <label htmlFor="type_identification">Tipo Identificación *</label>
              <select
                id="type_identification"
                name="type_identification"
                value={formik.values.type_identification}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="" label="Seleccione una opción" />
                {typesIndentification?.map(e => (
                  <option key={e.id} value={e.id}>
                    {e.name_short} - {e.name_long}
                  </option>
                ))}
              </select>
              {formik.touched.type_identification && formik.errors.type_identification ? (
                <div className="error">{formik.errors.type_identification}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="num_identification">Numero Identificación *</label>
              <input
                id="num_identification"
                name="num_identification"
                value={formik.values.num_identification}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Numero identificación"
              />
              {formik.touched.num_identification && formik.errors.num_identification ? (
                <div className="error">{formik.errors.num_identification}</div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="pnl-btn">
          <button type="submit" className="btn-agregar">Agregar</button>
        </div>
      </form>
    </div>
  );
}

export { FormAddPerson };