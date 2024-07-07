import React, { useEffect } from "react";
import "./styles/index.scss";
import styles from "./styles/module.scss";
import Accordion from "./components/accordion";
import AppHeader from "./components/appheader";
import AutoComplete from "./components/autocomplete";
import Avatar from "./components/avatar";
import { BottomNavigation, BottomNavItem } from "./components/bottomnavigation";
import Breadcrumb from "./components/breadcrumb";
import Button from "./components/button";
import Checkbox from "./components/checkbox";
import Chip from "./components/Chip";
import Column from "./components/column";
import DatePicker from "./components/datepicker";
import Dialog from "./components/dialog";
import FloatingButton from "./components/floatingbutton";
import FloatingMenu from "./components/floatingmenu";
import InputField from "./components/inputfield";
import Link from "./components/link";
import { MenuDropdown, MenuItem } from "./components/menudropdown";
import Progress from "./components/progress";
import RadioButton from "./components/radio";
import RangeSlider from "./components/rangeslider";
import ResizablePanel from "./components/dragresizeable";
import SelectDropDown from "./components/select";
import { Tabs, TabCard } from "./components/tabs";
import TabSelect from "./components/tabselect";
import Tag from "./components/tag";
import Text from "./components/text";
import { ToastProvider, useToast } from "./components/toast";
import ToggleInput from "./components/toggleInput";
import ToggleSwitch from "./components/toggleswitch";
import Tooltip from "./components/tooltip";

export const LuminaProvidor = ({ children }) => {
  // useEffect(() => {
  //   var imported = document.createElement("script");
  //   imported.src = "https://kit.fontawesome.com/c8ad5d74ba.js";
  //   imported.crossOrigin = "anonymous";
  //   document.head.appendChild(imported);
  // }, []);
  return <div className='lumina-design-wrapper'>{children}</div>;
};

export {
  Accordion,
  AppHeader,
  AutoComplete,
  Avatar,
  BottomNavigation,
  BottomNavItem,
  Breadcrumb,
  Button,
  Checkbox,
  Chip,
  Column,
  DatePicker,
  Dialog,
  FloatingButton,
  FloatingMenu,
  InputField,
  Link,
  MenuDropdown,
  MenuItem,
  Progress,
  RadioButton,
  RangeSlider,
  ResizablePanel,
  SelectDropDown,
  Tabs,
  TabCard,
  TabSelect,
  Tag,
  Text,
  ToastProvider,
  useToast,
  ToggleInput,
  ToggleSwitch,
  Tooltip
};
