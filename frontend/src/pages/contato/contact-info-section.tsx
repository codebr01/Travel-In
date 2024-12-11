export function ContactInfoSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-10">
          <div className="flex-1 max-w-xs text-center">
            <h3 className="text-xl font-semibold text-green-600 mb-2">Email</h3>
            <p className="text-gray-700">contato@tripplanner.com</p>
          </div>
          <div className="flex-1 max-w-xs text-center">
            <h3 className="text-xl font-semibold text-green-600 mb-2">Telefone</h3>
            <p className="text-gray-700">(89) 1234-5678</p>
          </div>
          <div className="flex-1 max-w-xs text-center">
            <h3 className="text-xl font-semibold text-green-600 mb-2">Redes Sociais</h3>
            <p className="text-gray-700">
              <a href="#" className="text-blue-600 hover:underline">Instagram</a> |{" "}
              <a href="#" className="text-blue-600 hover:underline">Facebook</a> |{" "}
              <a href="#" className="text-blue-600 hover:underline">LinkedIn</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}