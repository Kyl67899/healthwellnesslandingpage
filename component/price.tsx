

export default function Price() {
  return (
    <section className="px-6 md:px-20 py-24 bg-white">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">
        Not a Cushion. Not a Chair. Something Better.
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full min-w-175 border">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-4">Feature</th>
              <th>Cushion ($25)</th>
              <th>Ergonomic Chair ($799)</th>
              <th>Ready Rocker ($99)</th>
            </tr>
          </thead>

          <tbody className="text-center">
            <tr><td className="p-4">Passive Support</td><td>✓</td><td>✓</td><td>✓</td></tr>
            <tr><td className="p-4">Active Motion</td><td>✗</td><td>✗</td><td>✓</td></tr>
            <tr><td className="p-4">Improves Circulation</td><td>✗</td><td>✗</td><td>✓</td></tr>
            <tr><td className="p-4">Portable</td><td>✓</td><td>✗</td><td>✓</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}