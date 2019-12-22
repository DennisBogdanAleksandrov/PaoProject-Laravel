import React from 'react';

const PaoTable = () => {
  return (
    <div>
      <table class="table-auto">
        <thead>
          <tr>
            <th class="px-4 py-2">P</th>
            <th class="px-4 py-2">A</th>
            <th class="px-4 py-2">O</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border px-4 py-2">Alex</td>
            <td class="border px-4 py-2">Threw</td>
            <td class="border px-4 py-2">Bread</td>
          </tr>
          <tr class="bg-gray-100">
            <td class="border px-4 py-2">Daniel</td>
            <td class="border px-4 py-2">kicked</td>
            <td class="border px-4 py-2">bucket</td>
          </tr>
          <tr>
            <td class="border px-4 py-2">Arron</td>
            <td class="border px-4 py-2">drove</td>
            <td class="border px-4 py-2">rings</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PaoTable;