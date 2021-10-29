module.exports = ({ ProjectName, projectId, amount, totalAmounts, projectHoursLi }) => {
  const today = new Date();

  const listText = projectHoursLi
    .map((workingHour) => workingHour.text)
    .join("<br>");

  const listAmount = projectHoursLi
    .map((workingHour) => workingHour.amount)
    .join("<br>");

  return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>PDF Result Template</title>
          <style>
             .invoice-box {
             max-width: 800px;
             margin: auto;
             padding: 30px;
             border: 1px solid #eee;
             box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
             font-size: 18px;
             line-height: 24px;
             font-family: 'Helvetica Neue', 'Helvetica';
             color: #555;
             }
             li {
               list-style-type: none;
               text-decoration: none;
             }
             ul {
               list-style-type: none;
               text-decoration: none;
             }
             span {
               margin-left: 50px;
             }
             .margin-top {
             margin-top: 50px;
             }
             .justify-center {
             text-align: center;
             font-size: 22px;
             }
             .invoice-box table {
             width: 100%;
             line-height: inherit;
             text-align: left;
             }
             .invoice-box table td {
             padding: 5px;
             vertical-align: top;
             }
             .invoice-box table tr td:nth-child(2) {
             text-align: right;
             }
             .invoice-box table tr.top table td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.top table td.title {
             font-size: 45px;
             line-height: 45px;
             color: #333;
             }
             .invoice-box table tr.information table td {
             font-size: 22px;
             padding-bottom: 40px;
             }
             .invoice-box table tr.heading td {
             background: #eee;
             border-bottom: 1px solid #ddd;
             font-weight: bold;
             }
             .invoice-box table tr.details td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.item td {
             border-bottom: 1px solid #eee;
             }
             .invoice-box table tr.item.last td {
             border-bottom: none;
             }
             .invoice-box table tr.total td:nth-child(2) {
             border-top: 2px solid #eee;
             font-weight: bold;
             }
             @media only screen and (max-width: 600px) {
             .invoice-box table tr.top table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             .invoice-box table tr.information table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             }
          </style>
       </head>
       <body>
          <div class="invoice-box">
             <table cellpadding="0" cellspacing="0">
                <tr class="top">
                   <td colspan="2">
                      <table>
                         <tr>
                            <td>
                               Date: ${`${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}`}
                            </td>
                         </tr>
                      </table>
                   </td>
                </tr>
                <tr class="information">
                   <td colspan="2">
                      <table>
                         <tr>
                            <td>
                               Project name: ${ProjectName}
                            </td>
                            <td>
                               Project id: ${projectId}
                            </td>
                         </tr>
                      </table>
                      </td>
                      </tr>
                      <tr class="heading">
                         <td>History:</td>
                         <td>Hours:</td>
                      </tr>
                      <tr class="item">
                         <td>${listText}</td>
                         <td>${listAmount}</td>
                      </tr>

             <tr class="heading">
             <td>Time used:</td>
             <td>Total amount</td>
          </tr>
          <tr class="item">
             <td>Set hours:</td>
             <td>${amount}</td>
          </tr>
          <tr class="item">
             <td>Hours used heretofore:</td>
             <td>${totalAmounts}</td>
          </tr>
             </table>
             <br />
             <h1 class="justify-center">Time left to use: ${amount - totalAmounts}h</h1>
          </div>
       </body>
    </html>
    `;
};
