export interface headerProps {
  headerText: string;
  subHeaderText1: string;
  subHeaderText2: string;
  headerTextStyle: any;
  subHeaderTextStyle: any;
}

export interface appNameProps {
  color: string;
}

export interface goBackprops {
  onClick: any;
  buttonStyle: any;
  iconColor: any;
}

export interface messageProps {
  msgType: "warning" | "danger" | "success" | "info";
  animationTimeIn: number;
  msgText: string;
  show: boolean;
}

export interface bottomTabProps {
  homeClick: any;
  searchClick: any;
  cartClick: any;
  tagClick: any;
  userClick: any;
  state: string;
}
