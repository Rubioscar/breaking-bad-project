import "scss/details.scss";
import React from "react";
import DetailsTable from "common/components/tables/detailsTable";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import SelectInput from "common/components/inputs/selectInput";
import Button from "@mui/material/Button";

const DetailsPage = React.memo(() => {
  const object = {
    id: "RQomHIr6fBkRWa_tjGKif",
    brand: "Acer",
    model: "Iconia Tab A1-811",
    price: "150",
    imgUrl:
      "https://front-test-api.herokuapp.com/images/RQomHIr6fBkRWa_tjGKif.jpg",
    networkTechnology: "GSM / HSPA",
    networkSpeed: "HSPA",
    gprs: "Yes",
    edge: "Yes",
    announced: "2013  Q2",
    status: "Available. Released 2013  Q2",
    dimentions: "208.7 x 145.7 x 11.1 mm (8.22 x 5.74 x 0.44 in)",
    weight: "430",
    sim: "Yes",
    displayType: "TFT capacitive touchscreen  16M colors",
    displayResolution: "7.9 inches (~63.6% screen-to-body ratio)",
    displaySize: "768 x 1024 pixels (~162 ppi pixel density)",
    os: "Android 4.2 (Jelly Bean)",
    cpu: "Quad-core 1.2 GHz Cortex-A7",
    chipset: "Mediatek MT8389W",
    gpu: "PowerVR SGX544",
    externalMemory: "microSD  up to 32 GB (dedicated slot)",
    internalMemory: ["8 GB"],
    ram: "1 GB RAM",
    primaryCamera: ["5 MP", "autofocus"],
    secondaryCmera: "VGA",
    speaker: "Yes",
    audioJack: "Yes",
    wlan: ["Wi-Fi 802.11 b/g/n", "hotspot"],
    bluetooth: ["4.0", "A2DP"],
    gps: "Yes with A-GPS",
    nfc: "",
    radio: "No",
    usb: "microUSB 2.0",
    sensors: ["Accelerometer", "gyro"],
    battery: "Non-removable Li-Ion 4960 mAh battery (18.6 Wh)",
    colors: ["White"],
    options: {
      colors: [{ code: 1000, name: "White" }],
      storages: [{ code: 2000, name: "8 GB" }],
    },
  };

  return (
    <>
      <div className="container">
        <div className="image">
          <div className="img">
            <Zoom>
              <img src={object.imgUrl} alt="product" />
            </Zoom>
          </div>
        </div>
        <div className="info">
          <div className="details">
            <DetailsTable details={object} />
          </div>
          <div className="actions">
            <SelectInput
              id="color"
              label="Color"
              data={object.options.colors}
              value={1000}
              onChange={() => null}
            />
            <SelectInput
              id="storages"
              label="Almacenamiento"
              data={object.options.storages}
              value={2000}
              onChange={() => null}
            />
            <Button variant="contained">Añadir al carrito</Button>
          </div>
        </div>
      </div>
    </>
  );
});

export default DetailsPage;
