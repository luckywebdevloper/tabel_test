import { useEffect, useState } from "react";
import protobuf from "protobufjs";
import { Buffer } from "buffer";
import axios from "axios";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

axios
  .get("https://query1.finance.yahoo.com/v8/finance/chart/MAREL.IC", {
    params: {
      region: "US",
      lang: "en-US",
      includePrePost: false,
      interval: "1d",
      range: "5d",
      corsDomain: "finance.yahoo.com",
      ".tsrc": "finance",
    },
  })
  .then((res) => {
    const values = res.data; // Assuming the data you need is directly in res.data
    console.log(values);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

function App() {
  const [stockdetail, setStockdetail] = useState();
  const [direction, setDirection] = useState("");
  useEffect(() => {
    const ws = new WebSocket("wss://streamer.finance.yahoo.com");
    const root = protobuf.load("../YPricingData.proto", (error, root) => {
      if (error) {
        return console.log(error);
      }
      const Yaticker = root.lookupType("yaticker");

      ws.onopen = function open() {
        console.log("connected");
        ws.send(
          JSON.stringify({
            subscribe: ["SBIN.NS"],
          })
        );
      };

      ws.onclose = function close() {
        console.log("disconnected");
      };

      ws.onmessage = function incoming(message) {
        const next = Yaticker.decode(new Buffer(message.data, "base64"));
        if (stockdetail) {
          const nextdirection =
            stockdetail.price < next ? "up" : stockdetail.price ? "down" : "";
          if (nextdirection) {
            setDirection(nextdirection);
          }
        }
        setStockdetail(next);
      };
    });
  }, []);

  return (
    <div className="App">
      <h1>stockology</h1>
      <div></div>
      <Table>
        <TableHeader>
          <TableColumn>Display Name</TableColumn>
          <TableColumn>Price</TableColumn>
          <TableColumn>% Change</TableColumn>
          <TableColumn>OL</TableColumn>
          <TableColumn>OH</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>ADANI PORTS AND SPECIAL ECONOMIC ZONE LTD</TableCell>
            <TableCell>878.7</TableCell>
            <TableCell>%2.0</TableCell>

            <TableCell>860</TableCell>
            <TableCell>872</TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>ASIAN PAINTS LTD.</TableCell>
            <TableCell>3196</TableCell>
            <TableCell>%2.0</TableCell>

            <TableCell>860</TableCell>
            <TableCell>872</TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell>AXIS BANK LTD.</TableCell>
            <TableCell>878.7</TableCell>
            <TableCell>%2.0</TableCell>

            <TableCell>860</TableCell>
            <TableCell>872</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell>BAJAJ AUTO LTD.</TableCell>
            <TableCell>878.7</TableCell>
            <TableCell>%2.0</TableCell>

            <TableCell>860</TableCell>
            <TableCell>872</TableCell>
          </TableRow>
          <TableRow key="5">
            <TableCell>Bajaj Finance Limited</TableCell>
            <TableCell>878.7</TableCell>
            <TableCell>%2.0</TableCell>
            <TableCell>860</TableCell>
            <TableCell>872</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      {/* <div className="stonk">
        <marquee direction="left">
          {stockdetail && (
            <h2 className=" digi_text text-4xl">
              {stockdetail.id} {stockdetail.price.toFixed(2)} INR
            </h2>
          )}
        </marquee>
      </div> */}
    </div>
  );
}

export default App;
