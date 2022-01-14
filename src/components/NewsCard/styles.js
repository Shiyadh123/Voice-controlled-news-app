import { makeStyles } from "@material-ui/core";

export default makeStyles({
    media: {
      height: 250,
    },
    border: {
      border: 'solid',
    },
    fullHeightCard: {
      height: '100%',
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      borderRadius:'10px',
      borderBottom: '10px solid white',
    },
    activeCard: {
      backgroundColor: '#F1F1F1',
      borderBottom: '10px solid #22289a',
      borderTop:'10px solid #22289a'
    },
    grid: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '20px',
    },
    title: {
      padding: '0 16px',
    },
    cardActions: {
      padding: '0 16px 8px 16px',
      display: 'flex',
      justifyContent: 'space-between',
    },
    button:{
        border: 'none'
    }
  });