import React,{useState, useEffect} from 'react'
import { CarouselDashboards } from '../componentes/CarouselDashboards'
import { getCourse } from '../services/services';

export const Prueba = () => {
  const [course, setCourse] = useState([]);
  
  useEffect(() => {
    async function getAllCourses() {
      const data = await getCourse();
      setCourse(data.response._embedded.courses)
    }

    getAllCourses();
  }, [])

  return (
    <div>
        <CarouselDashboards item={course} />
    </div>
  )
}
