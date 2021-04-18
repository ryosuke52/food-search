import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
// import { SignalWifi1BarLockSharp } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({       // PCサイズとスマホサイズに連携
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    fontFamily: 'Kaushan Script',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      fontFamily: 'Kaushan Script',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const SearchBar = ({onSubmit}) => {
  const classes = useStyles();
  const [term, setTerm] = useState('');
  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  return (                                       //85行目からMenuIconを削除
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
          <a href="http://webservice.recruit.co.jp/">
            <img src="http://webservice.recruit.co.jp/banner/hotpepper-m.gif" alt="ホットペッパー Webサービス" width="90" height="40" border="0" title="ホットペッパー Webサービス"/>
          </a>
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Rest Search
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <form onSubmit={onFormSubmit}>
              <InputBase                                                 //お店情報を入力する部分
                placeholder="お店を探す"
                type="text"　　　　　　　　　　　　　　　　　　　　　　　　　　　//テキストのみ入力可能　　　　　　　　　　　　　　　　　　　　　　
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                value={term}                                             // termを受け取る　(termはキーワード)
                onChange={(event) => {
                  setTerm(event.target.value)
                }}
              />
            </form>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default SearchBar;