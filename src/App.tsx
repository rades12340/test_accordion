import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React, { useRef } from "react";
import { Accordion } from "react-bootstrap";
import ReactDOM from "react-dom";
import { useReactToPrint } from "react-to-print";
import autotable from "jspdf-autotable";

import "./index.css";

const App = () => {
  const elementToPrint = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => elementToPrint.current,
  });

  const downloadPdfDocument = () => {
    // const input = elementToPrint.current;
    // html2canvas(input, {
    //   allowTaint: true,
    //   useCORS: true,
    //   width: 600,
    // }).then((canvas) => {
    //   const imgData = canvas.toDataURL("image/png");
    //   const pdf = new jsPDF("p", "mm", "a4", true);
    //   pdf.html(imgData, {
    //     autoPaging: true,
    //     callback: function (doc) {
    //       doc.save();
    //     },
    //   });
    //   pdf.save();
    // });
    // const pdf = new jsPDF("p", "mm", "a4", true);
    // pdf.html(elementToPrint.current, {
    //   callback: function (doc) {
    //     doc.save();
    //   },
    //   filename: "download",
    // });

    const doc = new jsPDF("p", "mm", "a4", true);
    // doc.setTextColor(50, 30, 127);
    doc.setFontSize(24);
    doc.text("1. Contact details", 16, 20, {
      align: "left",
    });
    autotable(doc, {
      theme: "grid",
      startY: 23,
      styles: {
        lineWidth: 0,
      },
      body: [
        ["Creditor", "Donna"],
        ["Address", "Janice"],
        ["Telephone number(s)", "Ruth"],
        ["Home Insurance", "Jason"],
        ["Web Address", "Jane"],
      ],
      didParseCell: (data) => {
        console.log(data);
      },
    });

    doc.text("2. Key features of the credit product", 16, 71, {
      align: "left",
    });

    autotable(doc, {
      theme: "plain",
      startY: 72,
      styles: {
        lineWidth: 0,
      },
      body: [
        ["Creditor", "Donna"],
        ["Address", "Janice"],
        ["Telephone number(s)", "Ruth"],
        ["Home Insurance", "Jason"],
        ["Web Address", "Jane"],
      ],
      didParseCell: (data) => {
        console.log(data);
      },
    });
    doc.save();
  };

  return (
    <div className="container">
      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            <div className="content">
              <table id="my-table">
                <thead>
                  <tr>
                    <th colSpan={2} className="header">
                      1. Contact details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Donna</td>
                    <td>Moore</td>
                  </tr>
                  <tr>
                    <td>Janice</td>
                    <td>Henry</td>
                  </tr>
                  <tr>
                    <td>Ruth</td>
                    <td>Wells</td>
                  </tr>
                  <tr>
                    <td>Jason</td>
                    <td>Ray</td>
                  </tr>
                  <tr>
                    <td>Jane</td>
                    <td>Stephens</td>
                  </tr>
                  <tr>
                    <td>Adam</td>
                    <td>Nichols</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="accept">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              iure voluptas, molestias quasi vero minima quis molestiae amet
              qui! Animi illo perspiciatis accusamus vel facere debitis non
              natus pariatur libero obcaecati. Magnam voluptatibus debitis
              officia rem tempore ad iusto non, totam excepturi mollitia,
              reprehenderit perferendis sit facilis dolorum? Libero, minus?
            </div>
            <div className="links">
              <a className="link" onClick={downloadPdfDocument}>
                Save to PDF
              </a>
              <a href="">Print a copy</a>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            <div id="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="accept">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              iure voluptas, molestias quasi vero minima quis molestiae amet
              qui! Animi illo perspiciatis accusamus vel facere debitis non
              natus pariatur libero obcaecati. Magnam voluptatibus debitis
              officia rem tempore ad iusto non, totam excepturi mollitia,
              reprehenderit perferendis sit facilis dolorum? Libero, minus?
            </div>
            <div className="links">
              <a href="">Save to PDF</a>
              <a href="">Print a copy</a>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
