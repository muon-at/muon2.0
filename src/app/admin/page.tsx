'use client';

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Admin</h1>

        <div className="flex gap-4 mb-8 border-b">
          <button className="px-4 py-2 font-semibold text-blue-600 border-b-2 border-blue-600">
            Ansatt Oversikt
          </button>
          <button className="px-4 py-2 font-semibold text-gray-600 hover:text-blue-600">
            Ansatt Stats
          </button>
          <button className="px-4 py-2 font-semibold text-gray-600 hover:text-blue-600">
            Badges
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Ansatt Oversikt</h2>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition">
              + Legg til
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Navn</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Slack</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">TMG</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Rolle</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Avdeling</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">E-post</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Handlinger</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td colSpan={7} className="px-4 py-8 text-center text-gray-600">
                    Ingen ansatte ennå
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
