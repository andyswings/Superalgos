import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Mutation } from 'react-apollo'

import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Typography from '@material-ui/core/Typography'

import DELETE_TEAM from '../../../graphql/teams/DeleteTeamMutation'
import GET_TEAMS_BY_OWNER from '../../../graphql/teams/GetTeamsByOwnerQuery'

import { checkGraphQLError } from '../../../utils/graphql-errors'

const styles = theme => ({
  dialogContainer: {
    display: 'block',
    margin: '3em',
    minWidth: 400
  },
  buttonRight: {
    justifyContent: 'flex-end'
  }
})

export class ManageTeamDelete extends Component {
  constructor (props) {
    super(props)

    this.handleClickOpen = this.handleClickOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
<<<<<<< HEAD
      open: false,
      motto: '',
      description: ''
=======
      open: false
>>>>>>> feature/client-refactor-react
    }
  }

  handleClickOpen () {
    this.setState({ open: true })
  }

  handleClose () {
    this.setState({ open: false })
  }

  handleChange (e) {
    this.setState({ name: e.target.value })
  }

  render () {
    console.log(this.props, this.props.slug)
    const { classes, authId } = this.props
    return (
      <Mutation
        mutation={DELETE_TEAM}
        refetchQueries={[
          {
            query: GET_TEAMS_BY_OWNER,
            variables: { authId }
          }
        ]}
<<<<<<< HEAD
        update={(cache, { data: { deleteTeam } }) => {
          const data = cache.readQuery({ query: GET_TEAMS_BY_OWNER })
          console.log('Mutation cache update: ', deleteTeam, data)
          data.getTeamsByOwner.push(deleteTeam)
          cache.writeQuery({ query: GET_TEAMS_BY_OWNER, data })
        }}
=======
>>>>>>> feature/client-refactor-react
      >
        {(deleteTeam, { loading, error, data }) => {
          let errors
          let loader
          if (loading) {
<<<<<<< HEAD
            loader = <Typography variant='caption'>Submitting team...</Typography>
=======
            loader = (
              <Typography variant='caption'>Submitting team...</Typography>
            )
>>>>>>> feature/client-refactor-react
          }
          if (error) {
            errors = error.graphQLErrors.map(({ message }, i) => {
              const displayMessage = checkGraphQLError(message)
              console.log('createTeam error:', displayMessage)
              return (
                <Typography key={i} variant='caption'>
                  {message}
                </Typography>
              )
            })
          }
          return (
            <div>
<<<<<<< HEAD
              <Button size='small' color='primary' className={classes.buttonRight} onClick={this.handleClickOpen}>
=======
              <Button
                size='small'
                color='primary'
                className={classes.buttonRight}
                onClick={this.handleClickOpen}
              >
>>>>>>> feature/client-refactor-react
                <DeleteIcon /> Delete
              </Button>
              <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby='form-dialog-title'
              >
                <div classes={classes.dialogContainer}>
<<<<<<< HEAD
                  <DialogTitle id='form-dialog-title'>Delete Team Team</DialogTitle>
                  <DialogContent>
                    <Typography variant='subheading' color='primary'>DANGER - Deleting your team cannot be undone</Typography>
                    <Typography variant='subheading'>Are you sure you want to delete this team?</Typography>
=======
                  <DialogTitle id='form-dialog-title'>
                    Delete Team Team
                  </DialogTitle>
                  <DialogContent>
                    <Typography variant='subheading' color='primary'>
                      DANGER - Deleting your team cannot be undone
                    </Typography>
                    <Typography variant='subheading'>
                      Are you sure you want to delete this team?
                    </Typography>
>>>>>>> feature/client-refactor-react
                    {loader}
                    {errors}
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={this.handleClose} color='primary'>
                      Cancel
                    </Button>
<<<<<<< HEAD
                    <Button onClick={e => {
                      this.handleSubmit(e, deleteTeam, this.props.slug, authId)
                    }} color='primary'>
=======
                    <Button
                      onClick={e => {
                        this.handleSubmit(
                          e,
                          deleteTeam,
                          this.props.slug,
                          authId
                        )
                      }}
                      color='primary'
                    >
>>>>>>> feature/client-refactor-react
                      Delete Team
                    </Button>
                  </DialogActions>
                </div>
              </Dialog>
            </div>
          )
        }}
      </Mutation>
    )
  }

  async handleSubmit (e, deleteTeam, slug, authId) {
    e.preventDefault()
    await deleteTeam({ variables: { slug, owner: authId } })
<<<<<<< HEAD
=======
    this.setState({ open: false })
>>>>>>> feature/client-refactor-react
  }
}

ManageTeamDelete.propTypes = {
  classes: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  authId: PropTypes.string.isRequired
}

export default withStyles(styles)(ManageTeamDelete)
