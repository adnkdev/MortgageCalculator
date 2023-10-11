import Navbar from "./components/Navbar";
import SliderSelect from "./components/SliderSelect";
import Result from "./components/Result";
import TenureSelect from "./components/TenureSelect";
import { Container, Grid } from "@mui/material";
import { useState } from "react";

function App() {
  // name, function --> 15 is the default val of a //

  const [data, setData] = useState({
    homeValue: 10000,
    downPayment: 500,
    loanAmount: 500,
    interestRate: 5,
    loanTerm: 5,
  });

  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl" sx={{ marginTop: 4 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <SliderSelect data={data} setData={setData} />
            <TenureSelect data={data} setData={setData} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Result data={data} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
