import '../../src/App.css';
import {Dialog } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
// import DialogTitle from '@mui/material/DialogTitle';

const Loader = () => {
    const showLoaderContent = useSelector(store => store.user.showLoaderContent);
    return (
        <>
            <div >
                <Dialog style={{ overflow: "hidden" }}
                    open={showLoaderContent}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress style={{background:"none",overflow:"hidden", margin:"10px"}}/>
                    </Box>
                </Dialog>
            </div>

        </>
    )
}
export default Loader