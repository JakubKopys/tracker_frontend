import { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

class Index extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography>
          Lorem Ipsum
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Index);
