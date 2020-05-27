import Head from 'next/head'

export default function Showcase() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Showcase</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="my-16">
        <div className="showcase-page-header">
          <h1 className="text-4xl">
            Agricultural Production Statistics
            </h1>
          <p className="publisher flex">
            <img src="https://www.gravatar.com/avatar/none?d=https%3A%2F%2Ftesting.datahub.io%2Fstatic%2Fimg%2Flogo-cube03.png" className="rounded-full w-6 mr-2" />
            <a href="#" className="text-orange-400">Stats New Zealand</a>
          </p>
          <table className="table-auto my-6">
            <thead>
              <tr>
                <th className="pr-10 py-2">Files</th>
                <th className="px-10 py-2">Size</th>
                <th className="px-10 py-2">Format</th>
                <th className="px-10 py-2">Created</th>
                <th className="px-10 py-2">Updated</th>
                <th className="px-10 py-2">License</th>
                <th className="px-10 py-2">Source</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pr-10 py-2">3</td>
                <td className="px-10 py-2">N/A</td>
                <td className="px-10 py-2">text xls</td>
                <td className="px-10 py-2">2020-05-27</td>
                <td className="px-10 py-2">a few seconds ago</td>
                <td className="px-10 py-2">cc-by</td>
                <td className="px-10 py-2">Stats New Zealand</td>
              </tr>
            </tbody>
          </table>
          <div className="mb-10"> These releases contain information on farming in New Zealand - including livestock and arable farming, horticulture, and forestry. Agricultural production statistics are produced in collaboration with the Ministry for Primary Industries.<a href="#readme" className="underline"> Read more</a></div>
          <a href="#data" className="bg-black text-white py-4 px-4 rounded-sm mr-2 hover:border-0 hover:border-black hover:text-black hover:bg-transparent">Download</a>
          <a href="#data-cli" className="border border-black text-black py-4 px-4 rounded-sm">Developers</a>
        </div>
        <div className="my-16">
          <h2 className="text-3xl pb-2" id="data">Data Files</h2>
          <p>Download files in this dataset</p>
          <table className="table-auto">
            <thead>
              <th className="pr-10 text-left py-4">File</th>
              <th className="px-10 text-left py-4">Description</th>
              <th className="px-10 text-left py-4">Size</th>
              <th className="px-10 text-left py-4">Last changed</th>
              <th className="px-10 text-left py-4">Download</th>
            </thead>
            <tbody>
              <tr className="bg-gray-100 text-sm">
                <td className="pr-10 py-4 text-orange-500">
                  <i className="far fa-file-alt"></i> <a href="#" className="anchor-link">Dataset Metadata</a>
                </td>
                <td className="px-10 py-4">
                  Dataset's Metadata
                </td>
                <td className="px-10 py-4" title="{{ item.resource.sizeFormatted }}">
                </td>
                <td className="px-10 py-4" title="{{ item.resource.modified }}">
                  Invalid Date
                </td>
                <td className="px-10 py-4 text-orange-500">
                  <a href="#">
                    Text
                  </a>
                </td>
              </tr>
              <tr className="text-sm">
                <td className="pr-10 py-4 text-orange-500">
                  <i className="far fa-file-alt"></i> <a href="#" className="anchor-link">Dataset Metadata</a>
                </td>
                <td className="px-10 py-4">
                  Dataset's Metadata
                </td>
                <td className="px-10 py-4" title="{{ item.resource.sizeFormatted }}">
                </td>
                <td className="px-10 py-4" title="{{ item.resource.modified }}">
                  Invalid Date
                </td>
                <td className="px-10 py-4 text-orange-500">
                  <a href="#">
                    Xls
                  </a>
                </td>
              </tr>
              <tr className="bg-gray-100 text-sm">
                <td className="pr-10 py-4 text-orange-500">
                  <i className="far fa-file-alt"></i> <a href="#" className="anchor-link">Dataset Metadata</a>
                </td>
                <td className="px-10 py-4">
                  Dataset's Metadata
                </td>
                <td className="px-10 py-4">
                </td>
                <td className="px-10 py-4">
                  Invalid Date
                </td>
                <td className="px-10 py-4 text-orange-500">
                  <a href="#">
                    Data File
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
