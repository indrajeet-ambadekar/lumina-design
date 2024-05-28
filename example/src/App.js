import React, { useState } from "react";

import {
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
  SelectDropDown,
  Tabs,
  TabCard,
  TabSelect,
  Tag,
  Text,
  useToast,
  ToggleInput,
  ToggleSwitch,
  Tooltip
} from "lumina-design";
import * as LuminaComponents from "lumina-design";
import { LuminaIcon } from "lumina-design-icons";
console.log(Object.keys(LuminaComponents));
const floating_buttons = [
  {
    icon: <LuminaIcon name='home' size={20} />,
    click: () => console.log("clicked")
  },
  {
    icon: <LuminaIcon name='briefcase' size={20} />,
    click: () => console.log("clicked")
  },
  {
    icon: <LuminaIcon name='mobile-android' size={20} />,
    click: () => console.log("clicked")
  },
  {
    icon: <LuminaIcon name='phone' size={20} />,
    click: () => console.log("clicked")
  }
];
const App = () => {
  const toast = useToast();
  const [showDialog, toggleDialog] = useState(false);
  const [switchFlag, toggleSwitchFlag] = useState(false);
  const [toggleFlag, toggleInputFlag] = useState(false);
  const [checkboxFlag1, toggleCheckbox1] = useState(false);
  const [checkboxFlag2, toggleCheckbox2] = useState(false);
  const [checkboxFlag3, toggleCheckbox3] = useState(false);
  const [textValue, setTextValue] = useState("");
  const [numValue, setNumValue] = useState(1000);
  const [mobValue, setMobValue] = useState("");
  const [dateValue, setDateValue] = useState(new Date());
  const [city, setCity] = useState("");
  const [radioFlag, setRadioFlag] = useState("Apple");
  const [sliderVal, setSliderVal] = useState(30);
  const [smoker, setSmoker] = useState(true);
  const [occupation, setOccupation] = useState("salaried");
  const [fruitName, setFruitName] = useState("");
  // const _renderIcon = (icon) => {
  //   return React.createElement(ElysiumCloudIcons[icon], {
  //     style: { fontSize: 50, margin: `10px` }
  //   });
  // };
  return (
    <div className='showcase-container'>
      <section className='showcase-item custom'>
        <Text type='h2'>Floating Menu Component</Text>

        <FloatingMenu
          menuIdentifier={{ enable: true }}
          location='top-left'
          buttons={floating_buttons}
          mainButtonIcon={<LuminaIcon name='info' size={20} />}
          className='hello-world'
        />
        <FloatingMenu
          location='top-right'
          buttons={floating_buttons}
          mainButtonIcon={<LuminaIcon name='info' size={20} />}
        />
        <FloatingMenu
          location='bottom-left'
          buttons={floating_buttons}
          mainButtonIcon={<LuminaIcon name='info' size={20} />}
        />
        <FloatingMenu
          location='bottom-right'
          buttons={floating_buttons}
          mainButtonIcon={<LuminaIcon name='info' size={20} />}
        />
      </section>
      <section className='showcase-item'>
        <Text type='h2'>Accordion Component</Text>
        <pre>{`
<Accordion
  title={<div className='accordion-heading'>Accordion Component</div>}
  openIcon={<LuminaIcon name='chevron-down' size={20} />}
  collapseIcon={<LuminaIcon name='chevron-up' size={20} />}
  className='demo-card-accordion'
  defaultOpen={false}
  id='accordion1'
>
  <section className='content-wrapper'>Accordion Text Area</section>
</Accordion>
          `}</pre>
        <Accordion
          title={<div className='accordion-heading'>Accordion Component</div>}
          openIcon={<LuminaIcon name='chevron-down' size={24} />}
          collapseIcon={<LuminaIcon name='chevron-up' size={24} />}
          className='demo-card-accordion'
          defaultOpen={false}
          id='accordion1'
        >
          <section className='content-wrapper'>Accordion Text Area</section>
        </Accordion>
      </section>
      <section className='showcase-item'>
        <Text type='h2'>AppHeader Component</Text>
        <pre>
          {`
<AppHeader
  className='app-header'
  companyIcon={true}
  secondaryIcon={null}
  onIconClick={() => {
    alert("Header Icon Clicked");
  }}
  profileIcon={
    <Avatar size='M'>
      <LuminaIcon name='user' size={20} />
    </Avatar>
  }
>
  <h1>APP HEADER</h1>
</AppHeader>
            `}
        </pre>
        <AppHeader
          className='app-header'
          logo={null}
          companyIcon={true}
          secondaryIcon={null}
          onIconClick={() => {
            alert("Header Icon Clicked");
          }}
          profileIcon={
            <Avatar size='M'>
              <LuminaIcon name='user' size={20} />
            </Avatar>
          }
        >
          <h1>APP HEADER</h1>
          <h1>APP HEADER</h1>
          <h1>APP HEADER</h1>
          <h1>APP HEADER</h1>
          <h1>APP HEADER</h1>
          <h1>APP HEADER</h1>
          <h1>APP HEADER</h1>
        </AppHeader>
      </section>
      <section className='showcase-item'>
        <Text type='h2'>AutoComplete Component</Text>
        <pre>
          {`
<AutoComplete
  dataSet={[
    { id: 1, name: "apple" },
    { id: 2, name: "orange" },
    { id: 3, name: "banana" },
    { id: 4, name: "pine apple" },
    { id: 5, name: "custard apple" },
    { id: 6, name: "watermelon" }
  ]}
  onChange={(value) => setFruitName(value.name)}
  value={fruitName}
  placeholder='Start typing here...'
  label='Enter fruit name'
  id='AutoComplete'
  className='AutoComplete'
  renderItem={(_item) => (
    <div className='autocomplete-row'>{_item.name}</div>
  )}
  dataSetType='nested' // flat / nested
  dataTargetKey='name'
/>
            `}
        </pre>
        <AutoComplete
          dataSet={[
            { id: 1, name: "apple" },
            { id: 2, name: "orange" },
            { id: 3, name: "banana" },
            { id: 4, name: "pine apple" },
            { id: 5, name: "custard apple" },
            { id: 6, name: "watermelon" }
          ]}
          onChange={(value) => setFruitName(value.name)}
          value={fruitName}
          placeholder='Start typing here...'
          label='Enter fruit name'
          id='AutoComplete'
          className='AutoComplete'
          renderItem={(_item) => (
            <div className='autocomplete-row'>{_item.name}</div>
          )}
          dataSetType='nested' // flat / nested
          dataTargetKey='name'
        />
      </section>
      <section className='showcase-item'>
        <Text type='h2'>Avatar Component</Text>
        <pre>{`
<Avatar size='S'>JD</Avatar>
size--> S,M,L,XL,XXL,3XL
          `}</pre>
        <div className='flex-row'>
          <Avatar size='S' className='test'>
            <LuminaIcon name='user' size={12} />
          </Avatar>
          <Avatar size='S'>JD</Avatar>
          <Avatar size='M'>JD</Avatar>
          <Avatar size='L'>JD</Avatar>
          <Avatar size='XL'>JD</Avatar>
          <Avatar size='XXL'>JD</Avatar>
          <Avatar size='3XL'>JD</Avatar>
        </div>
      </section>
      <section className='showcase-item'>
        <Text type='h2'>BottomNavigation Component</Text>
        <pre>
          {`
<BottomNavigation className='bottom-nav-demo'>
  <BottomNavItem
    active={true}
    icon={<i className='fas fa-user' />}
    onClick={() => alert("TESTING")}
  >
    Page 1
  </BottomNavItem>
  <BottomNavItem icon={<LuminaIcon name='shield' size={24} />}>
    Page 2
  </BottomNavItem>
  <BottomNavItem type='center' icon={<i className='fas fa-plus' />}>
    Page 3
  </BottomNavItem>
  <BottomNavItem icon={<i className='fas fa-hamburger' />}>
    Page 4
  </BottomNavItem>
  <BottomNavItem icon={<i className='fas fa-truck' />}>
    Page 5
  </BottomNavItem>
</BottomNavigation>`}
        </pre>
        <BottomNavigation className='bottom-nav-demo'>
          <BottomNavItem
            active={true}
            icon={<LuminaIcon name='user' size={16} />}
            onClick={() => alert("TESTING")}
          >
            Page 1
          </BottomNavItem>
          <BottomNavItem icon={<LuminaIcon name='shield' size={16} />}>
            Page 2
          </BottomNavItem>
          <BottomNavItem
            type='center'
            icon={<LuminaIcon name='plus' size={30} />}
          >
            Page 3
          </BottomNavItem>
          <BottomNavItem icon={<LuminaIcon name='kayak' size={16} />}>
            Page 4
          </BottomNavItem>
          <BottomNavItem icon={<LuminaIcon name='truck' size={16} />}>
            Page 5
          </BottomNavItem>
        </BottomNavigation>
      </section>
      <section className='showcase-item'>
        <Text type='h2'>Breadcrumb Component</Text>
        <pre>
          {`
<Breadcrumb
  crumbs={[
    {
      label: "crumb 1",
      onClick: () => {
        console.log("crumb1");
      }
    }
  ]}
/>`}
        </pre>
        <Breadcrumb
          crumbs={[
            {
              label: "crumb 1",
              onClick: () => {
                console.log("crumb1");
              }
            }
          ]}
        />
        <Breadcrumb
          crumbs={[
            {
              label: "crumb 1",
              onClick: () => {
                console.log("crumb1");
              }
            },
            {
              label: "crumb 2",
              onClick: () => {
                console.log("crumb2");
              }
            },
            {
              label: "crumb 3",
              onClick: () => {
                console.log("crumb3");
              }
            },
            {
              label: "crumb 4",
              onClick: () => {
                console.log("crumb4");
              }
            },
            {
              label: "crumb 5",
              onClick: () => {
                console.log("crumb5");
              }
            }
          ]}
        />
      </section>
      <section className='showcase-item'>
        <Text type='h2'>Button Component</Text>
        <pre>
          {`
<Button
  curve='curved'
  id='button-1'
  onClick={() => {
    console.log("button-1");
  }}
  buttonsize='S'
  className='test'
  >
  Primary button
</Button>

curve-->       'curved','rounded','flat'
buttonsize-->  'S','M','L'
type-->        'primary','secondary','text'
`}
        </pre>
        <div className='flex-row'>
          <Button
            curve='curved'
            id='button-1'
            onClick={() => {
              console.log("button-1");
            }}
            buttonsize='S'
            className='test'
          >
            Primary button
          </Button>
          <Button
            type='primary'
            id='button-2'
            onClick={() => {
              console.log("button-2");
            }}
            curve='rounded'
            disabled={false}
            buttonsize='M'
            icon={<LuminaIcon name='plus' size={16} />}
          >
            Primary button
          </Button>
          <Button
            type='primary'
            id='button-2'
            onClick={() => {
              console.log("button-2");
            }}
            curve='rounded'
            disabled={true}
            buttonsize='M'
          >
            Primary button [Disabled]
          </Button>
          <Button
            type='secondary'
            id='button-3'
            onClick={() => {
              console.log("button-3");
            }}
            curve='curved'
            buttonsize='L'
            icon={<i className='fas fa-calendar-alt' />}
          >
            Secondary button
          </Button>
          <Button
            type='text'
            id='button-4'
            onClick={() => {
              console.log("button-4");
            }}
            curve='flat'
            buttonsize='L'
            icon={<i className='fas fa-calendar-alt' />}
            alignicon='left'
          >
            Text button
          </Button>
          <Button
            type='text'
            id='button-4'
            onClick={() => {
              console.log("button-4");
            }}
            curve='flat'
            buttonsize='L'
            icon={<i className='fas fa-calendar-alt' />}
            alignicon='right'
          >
            Text button
          </Button>
        </div>
      </section>
      <section className='showcase-item'>
        <Text type='h2'>Checkbox Component</Text>
        <pre>
          {`
<Checkbox
  name='options'
  onChange={(value) => toggleCheckbox1(value)}
  checked={checkboxFlag1}
  label='IceCream'
/>
`}
        </pre>
        <div className='flex-col'>
          <Checkbox
            name='options'
            onChange={(value) => toggleCheckbox1(value)}
            checked={checkboxFlag1}
            label='IceCream IceCream IceCream IceCream'
          ></Checkbox>
          <Checkbox
            name='options'
            onChange={(value) => toggleCheckbox2(value)}
            checked={checkboxFlag2}
            label='Falooda Falooda Falooda Falooda'
          ></Checkbox>
          <Checkbox
            name='options'
            onChange={(value) => toggleCheckbox3(value)}
            checked={checkboxFlag3}
            label='Milkshake Milkshake Milkshake Milkshake'
            disabled={true}
          ></Checkbox>
        </div>
      </section>
      <section className='showcase-item'>
        <Text type='h2'>Chip Component</Text>
        <pre>
          {`
<Chip
  onClose={() => console.log("HANDLE CHIP CLOSE")}
  icon={<i className='fas fa-thumbs-up' />}
  dismissable={true}
  color='white'
  >
  Label
</Chip>

color--> 'white','orange'
`}
        </pre>{" "}
        <Chip
          onClose={() => console.log("HANDLE CHIP CLOSE")}
          icon={<i className='fas fa-thumbs-up' />}
          dismissable={true}
          color='white'
        >
          Label
        </Chip>
        <Chip
          onClose={() => console.log("HANDLE CHIP CLOSE")}
          icon={<i className='fas fa-thumbs-up' />}
          dismissable={true}
          color='red'
        >
          Label
        </Chip>
      </section>
      <section className='showcase-item'>
        <Text type='h2'>Column Component</Text>
        <pre>
          {`
<Column xs={12} sm={12} md={12} lg={12}>//content</Column>

xs-> extra small[1-12], sm-> small media[1-12], md-> media device[1-12], lg-> large device[1-12]
`}
        </pre>
        <Column md={3} className='grid-content'>
          Column 1
        </Column>
        <Column className='grid-content' id='test' md={3}>
          Column 2
        </Column>
        <Column className='grid-content' md={3}>
          Column 3
        </Column>
        <Column className='grid-content' md={3}>
          Column 4
        </Column>
        <Column className='grid-content' sm={6}>
          Column 5
        </Column>
        <Column className='grid-content' lg={6}>
          Column 6
        </Column>
      </section>
      <section className='showcase-item'>
        <Text type='h2'>DatePicker Component</Text>
        <pre>
          {`
<DatePicker
  type='text'
  value={dateValue}
  onChange={(val) => setDateValue(val)}
  className='date-field'
  label='Date of birth'
  minDate={new Date("03-22-2021")}
  maxDate={new Date("12-31-2022")}
  iconRight={<i className='fas fa-calendar-alt' />}
/>
`}
        </pre>
        <DatePicker
          type='text'
          value={dateValue}
          onChange={(val) => setDateValue(val)}
          className='date-field'
          label='Date of birth'
          minDate={new Date("03-22-2021")}
          maxDate={new Date("12-31-2022")}
          iconRight={<i className='fas fa-calendar-alt' />}
        />
      </section>
      <section className='showcase-item'>
        <Text type='h2'>Dialog Component</Text>
        <pre>
          {`
<button
  className='modal-anchor-btn'
  onClick={() => toggleDialog(!showDialog)}
  >
  Click me
</button>
{showDialog && (
<Dialog
  id='demoModal'
  open={showDialog}
  hide={() => toggleDialog(!showDialog)}
  header={true}
>
  <div className='dialog-title'>
    <Text type='h5'>Dialog Title</Text>
  </div>
  <div className='dialog-content'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
    in reprehenderit in voluptate
  </div>
  <div className='dialog-footer'>
    <button
      onClick={() => toggleDialog(!showDialog)}
      className='dismiss-dialog'
    >
      Dismiss
    </button>
  </div>
</Dialog>
)}`}
        </pre>
        <button
          className='modal-anchor-btn'
          onClick={() => toggleDialog(!showDialog)}
        >
          Click me
        </button>
        {showDialog && (
          <Dialog
            id='demoModal'
            open={showDialog}
            hide={() => toggleDialog(!showDialog)}
            header={true}
          >
            <div className='dialog-title'>
              <Text type='h5'>Dialog Title</Text>
            </div>
            <div className='dialog-content'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate
              </p>
            </div>
            <div className='dialog-footer'>
              <button
                onClick={() => toggleDialog(!showDialog)}
                className='dismiss-dialog'
              >
                Dismiss
              </button>
            </div>
          </Dialog>
        )}
      </section>
      <section className='showcase-item'>
        <Text type='h2'>Floating Action button Component</Text>
        <pre>
          {`
<FloatingButton
  icon={<i className='fas fa-times' />}
  onClick={() => console.log("button 2 clicked")}
  color='white'
  size='medium'
  >
  Close
</FloatingButton>

color--> 'white','orange'
size-->  'S','M'
`}
        </pre>
        <FloatingButton
          icon={<LuminaIcon size={14} name='plus' />}
          onClick={() => console.log("button 1 clicked")}
          color='orange'
          size='S'
        />
        <FloatingButton
          icon={<LuminaIcon size={14} name='times' />}
          onClick={() => console.log("button 2 clicked")}
          color='white'
          size='M'
        >
          Close
        </FloatingButton>
        <FloatingButton
          // icon={<i className='fas fa-times' />}
          onClick={() => console.log("button 3 clicked")}
          color='orange'
          size='M'
        >
          Test floating button
        </FloatingButton>
      </section>
      <section className='showcase-item'>
        <Text type='h2'>InputField Component</Text>
        <pre>
          {`
<InputField
  type='text'
  value={textValue}
  onChange={(val) => setTextValue(val)}
  className='text-field'
  label='Full Name'
  onBlur={(event) => {
    console.log("ON BLUR EVENT", event?.target?.value);
  }}
/>

type--> 'text','number','mobile'
`}
        </pre>
        <InputField
          type='text'
          value={textValue}
          onChange={(val) => setTextValue(val)}
          className='text-field'
          textStyle='uppercase'
          name='username'
          label='user Name'
          onBlur={(event) => {
            console.log("ON BLUR EVENT", event?.target?.value);
          }}
        />
        <InputField
          type='password'
          value={textValue}
          onChange={(val) => setTextValue(val)}
          className='text-field'
          textStyle='uppercase'
          name='password'
          label='Password'
          autoFocus={false}
          onBlur={(event) => {
            console.log("ON BLUR EVENT", event?.target?.value);
          }}
        />
        <InputField
          type='number'
          value={numValue}
          onChange={(val) => setNumValue(val)}
          className='num-field'
          label='Income'
          iconLeft={<LuminaIcon size={14} name='user' />}
        />
        <InputField
          type='mobile'
          value={mobValue}
          onChange={(val) => setMobValue(val)}
          className='num-field'
          label='Mobile Number'
        />
      </section>
      <section className='showcase-item'>
        <Text type='h2'>Text Component</Text>
        <pre>
          {`
<Text type='h1'>Lorem Ipsum</Text>

type--> 'h1','h2','h3','h4','h5','h6','sh','sb-h1','sb-h2'h7','h8','b1','b2','b3','subtitle','caption','info'
`}
        </pre>
        <Text type='h1'>Lorem Ipsum ['h1']</Text>
        <Text type='h2'>Lorem Ipsum ['h2']</Text>
        <Text type='h3'>Lorem Ipsum ['h3']</Text>
        <Text type='h4'>Lorem Ipsum ['h4']</Text>
        <Text type='h5'>Lorem Ipsum ['h5']</Text>
        <Text type='h6'>Lorem Ipsum ['h6']</Text>
        <Text type='sh'>Lorem Ipsum ['sh']</Text>
        <Text type='sb-h1'>Lorem Ipsum ['sb-h1']</Text>
        <Text type='sb-h2'>Lorem Ipsum ['sb-h2']</Text>
        <Text type='h7'>Lorem Ipsum ['h7']</Text>
        <Text type='h8'>Lorem Ipsum ['h8']</Text>
        <Text type='b1'>Lorem Ipsum ['b1']</Text>
        <Text type='b2'>Lorem Ipsum ['b2']</Text>
        <Text type='b3'>Lorem Ipsum ['b3']</Text>
        <Text type='subtitle'>Lorem Ipsum ['subtitle']</Text>
        <Text type='caption'>Lorem Ipsum ['caption']</Text>
        <Text type='info'>Lorem Ipsum ['info']</Text>
      </section>
      <section className='showcase-item'>
        <Text type='h2'>Link Component</Text>
        <pre>
          {`
<Link target='_blank' size='M' href='/'>
  Clickable Link[medium]
</Link>

size--> 'S' ,'M', 'L'
`}
        </pre>
        <Link
          target='_blank'
          style={{ background: "yellow" }}
          size='S'
          href='/'
        >
          Clickable Link[small]
        </Link>
        <Link target='_blank' size='M' href='/'>
          Clickable Link[medium]
        </Link>
        <Link target='_blank' size='L' href='/'>
          Clickable Link[large]
        </Link>
        <Link target='_blank' href='/' disabled={true}>
          Clickable Link [disabled]
        </Link>
      </section>
      <section className='showcase-item'>
        <Text type='h2'>MenuDropdown Component</Text>
        <pre>
          {`
<MenuDropdown
  label={
    <span>
      <i className='fas fa-list' /> Simple Menu
    </span>
  }
  alignMenu='left'
  >
  <MenuItem onClick={() => console.log("HELLO WORLD")}>Home</MenuItem>
  <MenuItem>Settings</MenuItem>
  <MenuItem>Logout</MenuItem>
</MenuDropdown>

alignMenu--> 'left','right'
`}
        </pre>
        <MenuDropdown
          label={
            <span>
              <LuminaIcon size={20} name='list' /> Simple Menu
            </span>
          }
          alignMenu='left'
        >
          <MenuItem onClick={() => console.log("HELLO WORLD")}>Home</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuDropdown>
      </section>
      <section className='showcase-item'>
        <Text type='h2'>Progress Component</Text>
        <pre>
          {`
<Progress
  mode='radial'
  total={4}
  value={1}
  label={<span>1/4</span>}
  size={40}
/>

mode--> 'radial','linear'
type--> 'step' [default],'percentage'
success--> true / false [boolean]
error--> true / false [boolean]
`}
        </pre>
        <Column md={2}>
          <div className='grid-content'>
            <Progress
              mode='radial'
              total={4}
              value={1}
              label={<span>1/4</span>}
              size={40}
            ></Progress>
          </div>
        </Column>
        <Column md={2}>
          <div className='grid-content'>
            {" "}
            <Progress
              mode='radial'
              total={4}
              value={2}
              label={<span>2/4</span>}
              size={40}
            ></Progress>
          </div>
        </Column>
        <Column md={2}>
          <div className='grid-content'>
            <Progress
              mode='radial'
              total={4}
              value={3}
              label={<span>3/4</span>}
              size={40}
            ></Progress>
          </div>
        </Column>
        <Column md={2}>
          <div className='grid-content'>
            <Progress
              mode='radial'
              total={4}
              value={4}
              label={<span>4/4</span>}
              size={40}
              success={false}
            ></Progress>
          </div>
        </Column>
        <Column md={2}>
          <div className='grid-content'>
            <Progress
              mode='radial'
              total={4}
              value={4}
              label={<span>4/4</span>}
              size={40}
              error={true}
            ></Progress>
          </div>
        </Column>
        <Column md={2}>
          <div className='grid-content'>
            <Progress
              mode='radial'
              total={4}
              value={4}
              label={<span>4/4</span>}
              size={40}
              success={true}
            ></Progress>
          </div>
        </Column>
        <Column md={2}>
          <div className='grid-content'>
            <Progress
              mode='radial'
              total={100}
              value={25}
              label={<span>25%</span>}
              size={40}
              type='percentage'
            ></Progress>
          </div>
        </Column>
        <Column md={6}>
          <div className='grid-content'>
            {" "}
            <Progress
              mode='linear'
              total={100}
              value={90}
              label={<span>Loading assets</span>}
              strokeWidth={5}
            ></Progress>
          </div>
        </Column>
      </section>
      <section className='showcase-item'>
        <Text type='h2'>RadioButton Component</Text>
        <pre>
          {`
<RadioButton
  name='fruit'
  value='Apple'
  label='Apple'
  onChange={(val) => setRadioFlag(val)}
  checked={radioFlag === "Apple"}
/>`}
        </pre>
        <RadioButton
          name='fruit'
          value='Apple'
          label='Apple'
          onChange={(val) => setRadioFlag(val)}
          checked={radioFlag === "Apple"}
        />
        <RadioButton
          name='fruit'
          value='Peach'
          label='Peach'
          onChange={(val) => setRadioFlag(val)}
          checked={radioFlag === "Peach"}
        />
        <RadioButton
          name='fruit'
          value='Orange'
          label='Orange'
          onChange={(val) => setRadioFlag(val)}
          checked={radioFlag === "Orange"}
        />
        <RadioButton
          name='fruit'
          value='Kiwi'
          label='Kiwi'
          disabled={true}
          onChange={(val) => setRadioFlag(val)}
          checked={radioFlag === "Kiwi"}
        />
      </section>
      <section className='showcase-item'>
        <Text type='h2'>SelectDropDown Component</Text>
        <pre>
          {`
<SelectDropDown
  value={city}
  onChange={(value) => setCity(value)}
  label='Select a city'
  >
  <option value='Mumbai'>Mumbai</option>
  <option value='NewDelhi'>New Delhi</option>
  <option value='Kolkata'>Kolkata</option>
  <option value='Chennai'>Chennai</option>
  <option value='Bengaluru'>Bengaluru</option>
</SelectDropDown>`}
        </pre>
        <SelectDropDown
          value={city}
          onChange={(value) => setCity(value)}
          label='Select a city'
        >
          <option value='Mumbai'>Mumbai</option>
          <option value='NewDelhi'>New Delhi</option>
          <option value='Kolkata'>Kolkata</option>
          <option value='Chennai'>Chennai</option>
          <option value='Bengaluru'>Bengaluru</option>
        </SelectDropDown>
      </section>
      <section className='showcase-item'>
        <Text type='h2'>RangeSlider Component</Text>
        <pre>
          {`
<RangeSlider
  value={sliderVal}
  start={0}
  min={0}
  max={100}
  step={1}
  onChange={(val) => setSliderVal(val)}
  label={<span>LABEL</span>}
  showValue={true}
/>`}
        </pre>
        <RangeSlider
          value={sliderVal}
          start={0}
          min={0}
          max={100}
          step={1}
          onChange={(val) => setSliderVal(val)}
          label={<span>LABEL</span>}
          showValue={true}
        />
      </section>
      <section className='showcase-item'>
        <Text type='h2'>Tab cards Component</Text>
        <pre>
          {`
<Tabs mode='default'>
  <TabCard active={true} title={<span>TAB I</span>}>
    TAB ONE
  </TabCard>
  <TabCard title={<span>TAB II</span>}>
    TAB TWO
  </TabCard>
  <TabCard title={<span>TAB III</span>}>
    TAB THREE
  </TabCard>
</Tabs>`}
        </pre>
        <Tabs mode='default'>
          <TabCard active={true} title={<span>TAB I</span>}>
            {/* TAB ONE: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate */}
            <ol>
              {["apple", "banana", "carrot"].map((x, i) => (
                <li key={i}>{x}</li>
              ))}
            </ol>
          </TabCard>
          <TabCard title={<span>TAB II</span>}>
            TAB TWO: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate
          </TabCard>
          <TabCard title={<span>TAB III</span>}>
            TAB THREE: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate
          </TabCard>
        </Tabs>
      </section>
      <section className='showcase-item'>
        <Text type='h2'>TabSelect Component</Text>
        <pre>
          {`
<TabSelect
  onChange={(val) => setSports(val)}
  className='tab-select'
  labelClassName='tab-select-label'
  optionClassName='tab-select-option'
  activeOptionClassName='selected-tab'
  options={[
    {
      text: "YES",
      value: true,
      icon: null
    },
    {
      text: "NO",
      value: false,
      icon: null
    }
  ]}
  value={sports}
  >
  <label>Are you interested in adventure sports?</label>
</TabSelect>
`}
        </pre>
        <TabSelect
          onChange={(val) => setSmoker(val)}
          className='tab-select'
          labelClassName='tab-select-label'
          optionClassName='tab-select-option'
          activeOptionClassName='selected-tab'
          options={[
            {
              text: "YES",
              value: true,
              icon: null
            },
            {
              text: "NO",
              value: false,
              icon: null
            }
          ]}
          value={smoker}
        >
          <label>Are you interested in adventure sports?</label>
        </TabSelect>
      </section>
      <section className='showcase-item'>
        <Text type='h2'>Tag Component</Text>
        <pre>
          {`
<Tag type='default'>Default</Tag>

type --> default, success, inprogress, error, warn, pending, pending, info, unavailable
mode --> dark / null
`}
        </pre>
        <div className='flex-row'>
          <>
            <Tag type='default'>Default</Tag>
          </>
          <>
            <Tag type='success'>Success</Tag>
          </>
          <>
            <Tag type='inprogress'>In Progress</Tag>
          </>
          <>
            <Tag type='error'>Danger</Tag>
          </>
          <>
            <Tag type='warn'>Warning</Tag>
          </>
          <>
            <Tag type='pending'>Pending</Tag>
          </>
          <>
            <Tag type='info'>Info</Tag>
          </>
          <>
            <Tag type='unavailable'>Unavailable</Tag>
          </>
        </div>
        <div className='flex-row'>
          <>
            <Tag mode='dark' type='default'>
              Default
            </Tag>
          </>
          <>
            <Tag mode='dark' type='success'>
              Success
            </Tag>
          </>
          <>
            <Tag mode='dark' type='inprogress'>
              In Progress
            </Tag>
          </>
          <>
            <Tag mode='dark' type='error'>
              Danger
            </Tag>
          </>
          <>
            <Tag mode='dark' type='warn'>
              Warning
            </Tag>
          </>
          <>
            <Tag mode='dark' type='pending'>
              Pending
            </Tag>
          </>
          <>
            <Tag mode='dark' type='info'>
              Info
            </Tag>
          </>
          <>
            <Tag mode='dark' type='unavailable'>
              Unavailable
            </Tag>
          </>
        </div>
      </section>
      <section className='showcase-item'>
        <Text type='h2'>Toast Component</Text>
        <pre>
          {`
toast.open("MESSAGE",time_in_milliseconds)
toast.success("MESSAGE",time_in_milliseconds)
toast.error("MESSAGE",time_in_milliseconds)
toast.info("MESSAGE",time_in_milliseconds)
toast.warn("MESSAGE",time_in_milliseconds)
`}
        </pre>
        <Button
          type='primary'
          curve='curved'
          size='M'
          onClick={() => {
            toast.open(
              "TESTING TESTING TESTING TESTING TESTING TESTING",
              4000000
            );
          }}
        >
          Test your toast [default]
        </Button>
        <Button
          type='primary'
          curve='curved'
          size='M'
          onClick={() => {
            toast.success(
              "TESTING TESTING TESTING TESTING TESTING TESTING",
              4000000
            );
          }}
        >
          Test your toast [success]
        </Button>

        <Button
          type='primary'
          curve='curved'
          size='M'
          onClick={() => {
            toast.error(
              "TESTING TESTING TESTING TESTING TESTING TESTING",
              4000000
            );
          }}
        >
          Test your toast [error]
        </Button>
        <Button
          type='primary'
          curve='curved'
          size='M'
          onClick={() => {
            toast.info("TESTING TESTING TESTING TESTING", 4000000);
          }}
        >
          Test your toast [info]
        </Button>
        <Button
          type='primary'
          curve='curved'
          size='M'
          onClick={() => {
            toast.warn(
              "TESTING TESTING TESTING TESTING TESTING TESTING",
              4000000
            );
          }}
        >
          Test your toast [warn]
        </Button>
      </section>
      <section className='showcase-item'>
        <pre>
          {`
<ToggleInput
  id='smoker'
  className='smoker'
  name='smoker'
  checked={toggleFlag}
  onChange={(flag) => toggleInputFlag(flag)}
/>
`}
        </pre>
        <Text type='h2'>ToggleInput Component</Text>
        <ToggleInput
          id='smoker'
          className='smoker'
          name='smoker'
          checked={toggleFlag}
          onChange={(flag) => toggleInputFlag(flag)}
        />
      </section>
      <section className='showcase-item'>
        <pre>
          {`
<ToggleSwitch
  id='newsletter'
  className='newsletter'
  checked={switchFlag}
  onChange={(flag) => toggleSwitchFlag(flag)}
  optionLabels={["Yes", "No"]}
  />
`}
        </pre>
        <Text type='h2'>ToggleSwitch Component</Text>
        <ToggleSwitch
          id='newsletter'
          className='newsletter'
          checked={switchFlag}
          onChange={(flag) => toggleSwitchFlag(flag)}
          optionLabels={["Yes", "No"]}
        />
      </section>
      <section className='showcase-item'>
        <Text type='h2'>Tooltip Component</Text>
        <pre>
          {`
<Tooltip
  title='demo react tooltip'
  body={
    <div>
      <span>Something about this feature and what it does. </span>
      <div className='flex-row'>
        <button>I am not Sure</button>
        <button>
          Know more <i className='fas fa-arrow-right' />
        </button>
      </div>
    </div>
  }
  containerClass='tooltipStyleChange'
  >
  <div>BottomToolTip</div>
</Tooltip>
`}
        </pre>
        <Tooltip
          title='demo react tooltip'
          body={
            <div>
              <span>Something about this feature and what it does. </span>
              <div className='flex-row'>
                <button>I am not Sure</button>
                <button>
                  Know more <LuminaIcon name='arrow-right' size={20} />
                </button>
              </div>
            </div>
          }
          containerClass='tooltipStyleChange'
        >
          <div>BottomToolTip</div>
        </Tooltip>
      </section>

      {/* <section className='showcase-item'>
          <Text type='h2'>Icon Component</Text>
          <div className='icon-cntnr'>
            {Object.keys(ElysiumCloudIcons).map((icon, i) => (
              <Column md={2} key={i}>
                <span title={icon}>{_renderIcon(icon)}</span>
                <Text type='b2'>{icon}</Text>
              </Column>
            ))}
          </div>
        </section> */}
    </div>
  );
};

export default App;
