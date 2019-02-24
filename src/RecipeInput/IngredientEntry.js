import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = (theme) => ({
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
  },
});

class IngredientEntry extends React.Component {
  constructor(props) {
    super(props);
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.props.handleChange(name,value);
  }

  render() {return (
    <Grid container spacing={24}>
      <Grid item xs={2}>
        <TextField
          id="quantity"
          name="quantity"
          label="Quantity"
          fullWidth
          type="number"
          autoComplete="fname"
          defaultValue="0"
          onChange={this.handleValueChange}
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          id="unit"
          name="unit"
          label="Unit"
          fullWidth
          onChange={this.handleValueChange}
        />
      </Grid>
      <Grid item xs={4} >
        <TextField
          required
          id="ingredient"
          name="ingredient"
          label="ingredient"
          onChange={this.handleValueChange}
        />
      </Grid>
      {/* <Grid item xs={4}>
        <TextField
          id="note"
          name="note"
          label="Note"
          autoComplete="fname"
          value={this.state.note}
          onChange={this.handleNoteChange}
        />
      </Grid> */}
      <IconButton className={this.props.classes.button} aria-label="Delete" onClick={this.props.onClick}>
        <DeleteIcon />
      </IconButton>
    </Grid>
  )
  }
}

IngredientEntry.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IngredientEntry);