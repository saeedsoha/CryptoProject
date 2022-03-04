import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect, useRef } from 'react';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import zIndex from '@material-ui/core/styles/zIndex';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing(2),
    },
    flex: {
        display: 'flex',
        flexDirection: 'column',
    },
    zindex: {
        zIndex: 100,
        overflow: 'auto',
    },
    buttonColor: {
        color: 'white',

    },
    liSub: {
            display: 'flex',
            alignItems: 'center',
            '& a': {
                textDecoration: 'none',
                width: '100%',
                color: 'black',
                fontSize: '1.1rem',
                borderRadius: 5,
                padding: '6px 16px 6px 20px',
                '&:hover': {
                    background: 'linear-gradient(to right ,#a16bb331, #420be636 )',
            }
        },

    }
}));

export default function Props(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [subMenuSupport, setSubMenuSupport] = useState([])
    const [subMenuNews, setSubMenuNews] = useState([])
    const [subMenuCompony, setSubMenuCompony] = useState([])


    useEffect(() => {
        setLoading(true);
        if (props.subMenu2) {
            setData(props.subMenu2)
            setLoading(false);
        } if (props.subMenuSupport) {
            setSubMenuSupport(props.subMenuSupport)
            setLoading(false);
        } if (props.subMenuNews) {
            setSubMenuNews(props.subMenuNews)
            setLoading(false);
        } if (props.subMenuCompony) {
            setSubMenuCompony(props.subMenuCompony)
            setLoading(false);
        }

    }, []);

    if (loading) {
        return <p>Data is loading</p>
    }



    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    return (
        <div className={classes.root}>
            <div>
                <Button
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    className={classes.buttonColor}
                >
                    {props.name}<ExpandMoreOutlinedIcon />
                </Button>
                <Popper className={classes.zindex} open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList className={classes.flex} autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                        {
                                            data.map(item => {
                                                return (
                                                    <li className={classes.liSub} key={item.id}><Link to={item.path}>  <MenuItem onClick={handleClose}>{item.title}</MenuItem> </Link></li>
                                                   
                                                )
                                            })
                                        }
                                        {
                                            subMenuSupport.map(item => {
                                                return (
                                                    <li className={classes.liSub} key={item.id}><Link to={item.path}>  <MenuItem onClick={handleClose}>{item.title}</MenuItem> </Link></li>
                                                   
                                                )
                                            })
                                        }
                                        {
                                            subMenuNews.map(item => {
                                                return (
                                                    <li className={classes.liSub} key={item.id}><Link to={item.path}>  <MenuItem onClick={handleClose}>{item.title}</MenuItem> </Link></li>
                                                   
                                                )
                                            })
                                        }
                                        {
                                            subMenuCompony.map(item => {
                                                return (
                                                    <li className={classes.liSub} key={item.id}><Link to={item.path}>  <MenuItem onClick={handleClose}>{item.title}</MenuItem> </Link></li>
                                                   
                                                )
                                            })
                                        }
                                        
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
        </div>
    );
}
