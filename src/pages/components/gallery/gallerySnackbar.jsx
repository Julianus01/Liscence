import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import CheckIcon from '@material-ui/icons/Check';

const styles = {
    check: {
        color: 'green'
    }
}

const GallerySnackbar = (props) =>

    <div>
        <Snackbar
            anchorOrigin={{ vertical: props.vertical, horizontal: props.horizontal }}
            open={props.open}
            onClose={props.close}
            ContentProps={{
                'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">{props.message}</span>}
            action={[
                    <CheckIcon key='check' style={styles.check}/>
            ]}
        />
    </div>

export default GallerySnackbar;