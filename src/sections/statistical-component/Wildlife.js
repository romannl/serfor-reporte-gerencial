// PropTypes
import PropTypes from 'prop-types';

// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Card, Typography, CardHeader, Stack } from '@mui/material';

// Components
import Header from './sub-components/Header';
import CustomAppChart from './sub-components/CustomAppChart';
// ----------------------------------------------------------------------

Wildlife.propTypes = {
  data: PropTypes.object,
}

export default function Wildlife({data}) {
  const theme = useTheme();
  const {managementAndBreedingCenters, sportHuntingLicenses} = data;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Header title={'FAUNA SILVESTRE'} />
      </Grid>
      <Grid item xs={6}>
        <Card>
          <Typography variant="h4" component="h4" textAlign="center">
            Licencias de Caza Deportiva emitidas
          </Typography>
          <Typography variant="h3" component="h3" textAlign="center" sx={{ color: theme.palette.secondary.main }}>
            {sportHuntingLicenses.reduce((pre, item) => (pre + item.value), 0).toLocaleString("es-PE")}
          </Typography>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <Typography variant="h4" component="h4" textAlign="center">
            Centros de Manejo y Cria
          </Typography>
          <Typography variant="h3" component="h3" textAlign="center" sx={{ color: theme.palette.secondary.main }}>
            {managementAndBreedingCenters.reduce((pre, item) => (pre + item.value), 0).toLocaleString("es-PE")}
          </Typography>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <CustomAppChart
          title="Licencias de caza emitidas por Autoridad"
//          subheader="Total de licencias emitidas por Autoridad"
          chartData={sportHuntingLicenses}
          colors={[theme.palette.chart.lightGreen[0]]}
          dataLabelsOffsetX={30}
        />
      </Grid>
      <Grid item xs={6}>
        <Card sx={{ p: 2 }}>
          <CardHeader title={'Recuento por tipo de centro de manejo'} />
          <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap" justifyContent="center" alignItems="baseline">
            {managementAndBreedingCenters.map((item, index) => (
              <Stack key={index} direction="column" justifyContent="space-between" sx={{ pt: 2 }}>
                <Typography variant="h6" component="h6" textAlign="center">
                  {item.title}
                </Typography>
                <Typography
                  variant="h5"
                  component="h5"
                  textAlign="center"
                  sx={{ pt: 1, color: theme.palette.secondary.main }}
                >
                  {item.value}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Card>
      </Grid>
    </Grid>
  );
}
