const Course = ({ course }) => {

  let totalExercises = 0;
  course.parts.forEach(part => totalExercises += part.exercises)

  return(
    <div>
      <h1>{course.name}</h1>
      {course.parts.map(part => 
        <p key={part.id}>
          {part.name} {part.exercises}
        </p>)
      }
      <p><strong>total of {totalExercises} exercises</strong></p>
    </div>
  )
}

export default Course