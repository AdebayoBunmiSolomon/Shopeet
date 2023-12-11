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

export interface goBackProps {
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
  homeClick: () => void;
  searchClick: () => void;
  cartClick: () => void;
  tagClick: () => void;
  userClick: () => void;
  state: string;
}

export interface cardProps {
  data: any;
}

export interface indicatorsProps {
  imgData: any;
  index: number;
}
