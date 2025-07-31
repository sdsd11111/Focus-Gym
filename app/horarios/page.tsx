export default function HorariosPage() {
  const weekdaySchedule = [
    { time: "05:30 - 07:00", class: "Entrenamiento Funcional" },
    { time: "07:00 - 08:30", class: "Musculación" },
    { time: "08:30 - 10:00", class: "Cardio Dance" },
    { time: "10:00 - 11:30", class: "Yoga Fitness" },
    { time: "11:30 - 13:00", class: "Entrenamiento Libre" },
    { time: "13:00 - 14:30", class: "Hipertrofia" },
    { time: "14:30 - 16:00", class: "Cardio HIIT" },
    { time: "16:00 - 17:30", class: "Entrenamiento Funcional" },
    { time: "17:30 - 19:00", class: "Musculación" },
    { time: "19:00 - 20:30", class: "Cardio Dance" },
    { time: "20:30 - 22:00", class: "Entrenamiento Libre" },
  ]

  const weekendSchedule = [
    { time: "09:00 - 10:30", class: "Entrenamiento Funcional" },
    { time: "10:30 - 12:00", class: "Cardio Dance" },
    { time: "12:00 - 13:30", class: "Musculación" },
    { time: "13:30 - 16:00", class: "Entrenamiento Libre" },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center pt-24">
      <section className="w-full max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">⏰ Nuestros Horarios de Focus Gym</h1>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
          En Focus Gym de Loja, entrena a la hora que mejor se adapte a tu rutina con nuestros horarios amplios y flexibles.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-lime-500 text-white p-4">
              <h2 className="text-xl font-bold text-center">Lunes a Viernes</h2>
              <p className="text-center text-white/80">5:30 AM - 10:00 PM</p>
            </div>
            <div className="p-4">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="py-2 px-4 text-left text-gray-900">Horario</th>
                      <th className="py-2 px-4 text-left text-gray-900">Clase</th>
                    </tr>
                  </thead>
                  <tbody>
                    {weekdaySchedule.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                        <td className="py-2 px-4 text-gray-800">{item.time}</td>
                        <td className="py-2 px-4 text-gray-800">{item.class}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-lime-500 text-white p-4">
              <h2 className="text-xl font-bold text-center">Sábados</h2>
              <p className="text-center text-white/80">9:00 AM - 4:00 PM</p>
            </div>
            <div className="p-4">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="py-2 px-4 text-left text-gray-900">Horario</th>
                      <th className="py-2 px-4 text-left text-gray-900">Clase</th>
                    </tr>
                  </thead>
                  <tbody>
                    {weekendSchedule.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                        <td className="py-2 px-4 text-gray-800">{item.time}</td>
                        <td className="py-2 px-4 text-gray-800">{item.class}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-lime-50 border border-lime-200 rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold mb-2 text-gray-800">📌 Información Importante</h3>
          <p className="mb-4 text-gray-700">
            Los horarios pueden variar en días festivos o por eventos especiales. Te invitamos a consultar nuestras redes sociales para las últimas actualizaciones.
          </p>
          <button className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Descargar Horario Completo
          </button>
        </div>
      </section>
    </main>
  )
}

