'use client';

import Link from 'next/link';

export default function TeamlederPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Teamleder</h1>
          <Link
            href="/admin"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition"
          >
            Admin
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Allente</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Opplast Anger
              </label>
              <input type="file" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Opplast Salg
              </label>
              <input type="file" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Opplast TMG
              </label>
              <input type="file" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Ansatt</th>
                  <th className="px-4 py-3 text-right font-semibold text-gray-700">Dag</th>
                  <th className="px-4 py-3 text-right font-semibold text-gray-700">Uke</th>
                  <th className="px-4 py-3 text-right font-semibold text-gray-700">Mnd</th>
                  <th className="px-4 py-3 text-right font-semibold text-gray-700">Total</th>
                  <th className="px-4 py-3 text-right font-semibold text-gray-700">Rekorder</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-900">Ingen data</td>
                  <td className="px-4 py-3 text-right text-gray-600">-</td>
                  <td className="px-4 py-3 text-right text-gray-600">-</td>
                  <td className="px-4 py-3 text-right text-gray-600">-</td>
                  <td className="px-4 py-3 text-right text-gray-600">-</td>
                  <td className="px-4 py-3 text-right text-gray-600">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Endre Targets</h2>
          <p className="text-gray-600">Kommer snart</p>
        </div>
      </div>
    </div>
  );
}
