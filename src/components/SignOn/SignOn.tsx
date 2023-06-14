/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preserve that ability, always export from Quest to regenerate this file.
 *   To setup element attributes and CSS properties, use the Quest web app
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import {
  Typography,
  TextField,
  InputAdornment,
  SvgIcon,
  Link as MUILink,
  Button,
} from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { styled } from '@mui/material/styles';
import { SignOnProps } from 'src/types';
import useSignOn from 'src/components/SignOn/useSignOn';

const SignOn1: any = styled('div')(({ theme }: any) => ({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  boxShadow: `0px 2px 1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12)`,
  borderRadius: `4px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  width: `327px`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `24px`,
  boxSizing: `border-box`,
  height: 'auto',
}));

const Typography1: any = styled(Typography)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `0px`,
  color: `rgba(0, 0, 0, 0.87)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `400`,
  fontSize: `32px`,
  letterSpacing: `-1.5px`,
  textDecoration: `none`,
  lineHeight: `116.70000553131104%`,
  textTransform: `none`,
}));

const Typography2: any = styled(Typography)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `16px 0px 0px 0px`,
  color: `rgba(0, 0, 0, 0.87)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0.15000000596046448px`,
  textDecoration: `none`,
  lineHeight: `150%`,
  textTransform: `none`,
}));

const TextField1: any = styled(TextField)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `16px 0px 0px 0px`,
  color: `rgba(0, 0, 0, 0.6)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `400`,
  fontSize: `12px`,
  letterSpacing: `0.15000000596046448px`,
  textDecoration: `none`,
  lineHeight: `12px`,
  textTransform: `none`,
}));

const TextField2: any = styled(TextField)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `16px 0px 0px 0px`,
  color: `rgba(0, 0, 0, 0.6)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `400`,
  fontSize: `12px`,
  letterSpacing: `0.15000000596046448px`,
  textDecoration: `none`,
  lineHeight: `12px`,
  textTransform: `none`,
}));

const Frame2: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `space-between`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `16px 0px 0px 0px`,
});

const Link1: any = styled(MUILink)(({ theme }: any) => ({
  margin: `0px`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0.17000000178813934px`,
  textDecoration: `'initial'`,
  lineHeight: `142.99999475479126%`,
  textTransform: `none`,
}));

const Link2: any = styled(MUILink)(({ theme }: any) => ({
  margin: `0px`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0.17000000178813934px`,
  textDecoration: `'initial'`,
  lineHeight: `142.99999475479126%`,
  textTransform: `none`,
}));

const Button1: any = styled(Button)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `16px 0px 0px 0px`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `500`,
  fontSize: `14px`,
  letterSpacing: `0.4000000059604645px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `uppercase`,
}));

const Link3: any = styled(MUILink)(({ theme }: any) => ({
  margin: `16px 0px 0px 0px`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0.15000000596046448px`,
  textDecoration: `'initial'`,
  lineHeight: `150%`,
  textTransform: `none`,
}));

function SignOn(props: SignOnProps): JSX.Element {
  const { fns } = useSignOn();

  return (
    <SignOn1 className={props.className}>
      <Typography1 variant={'body1'} gutterBottom={false} gutterBottom={false}>
        {'LOGO'}
      </Typography1>
      <Typography2 variant={'body1'} gutterBottom={false} gutterBottom={false}>
        {'Sign on with user name and password'}
      </Typography2>
      <TextField1
        variant={'outlined'}
        disabled={true}
        size={'small'}
        label={'Username'}
        value={'formData.username'}
        onChange={'formFunctions.handleUsernameChange'}
        variant={'outlined'}
        size={'small'}
        type={'text'}
      />
      <TextField2
        variant={'outlined'}
        disabled={false}
        size={'small'}
        label={'Password'}
        type={'password'}
        onBlur={() => {
          if (formData.password.length < 8) {
            window.alert('Password must be at least 8 characters long');
          }
        }}
        variant={'outlined'}
        size={'small'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SvgIcon
                component={RemoveRedEyeIcon}
                htmlColor={`action/active`}
              ></SvgIcon>
            </InputAdornment>
          ),
        }}
      />
      <Frame2>
        <Link1
          underline={'always'}
          color={'primary'}
          underline={'always'}
          color={'primary'}
        >
          {'Forgot username'}
        </Link1>
        <Link2
          underline={'always'}
          color={'primary'}
          underline={'always'}
          color={'primary'}
        >
          {'Forgot password'}
        </Link2>
      </Frame2>
      <Button1
        size={'medium'}
        color={'primary'}
        disabled={!formData.isValidPassword}
        variant={'contained'}
        onClick={'formFunctions.handleSubmit'}
        size={'medium'}
        color={'primary'}
        variant={'contained'}
      >
        {'Submit'}
      </Button1>
      <Link3
        underline={'always'}
        color={'primary'}
        underline={'always'}
        color={'primary'}
      >
        {'Sign on with SSO'}
      </Link3>
    </SignOn1>
  );
}

export default SignOn;
