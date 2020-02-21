import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Grommet,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  Layer,
  Text,
  Form,
  FormField,
  Collapsible,
  ResponsiveContext
} from "grommet";
import { Notification, Login, Close, AddCircle } from "grommet-icons";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModalSubmit, setShowModalSubmit] = useState(false);
  const [userData, setUserData] = useState([
    {
      id: 1,
      username: "Ihsan",
      score: "3000",
      entries: "2"
    },
    {
      id: 2,
      username: "Rama",
      score: "1000",
      entries: "1"
    }
  ]);

  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {size => (
          <Box fill>
            <AppBar>
              <Heading level="3" margin="none">
                EML Quiz
              </Heading>
              <Box direction="row" gap="16px">
                <Button
                  icon={<AddCircle />}
                  onClick={() => setShowModalSubmit(!showModal)}
                />
                <Button
                  icon={<Login />}
                  onClick={() => setShowModal(!showModal)}
                />
                <Button
                  icon={<Notification />}
                  onClick={() => setShowSidebar(!showSidebar)}
                />
              </Box>
            </AppBar>
            <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
              <Box flex align="center" justify="start">
                {showModal && (
                  <Layer
                    onEsc={() => setShowModal(false)}
                    onClickOutside={() => setShowModal(false)}
                  >
                    <Button
                      icon={<Close />}
                      alignSelf="end"
                      onClick={() => setShowModal(false)}
                    />
                    <Box pad="medium" gap="16px">
                      <Form>
                        <FormField
                          type="text"
                          name="username"
                          label="Username"
                        />
                        <FormField
                          type="password"
                          name="password"
                          label="Password"
                        />
                        {isLogin ? (
                          <Box gap="16px">
                            <Button type="submit" primary label="Login" />
                            <Box direction="row" gap="6px">
                              <Text size="14px">Create new account?</Text>
                              <Button
                                plain
                                label="register"
                                onClick={() => setIsLogin(false)}
                              />
                            </Box>
                          </Box>
                        ) : (
                          <Box gap="16px">
                            <Button type="submit" primary label="Register" />
                            <Box direction="row" gap="6px">
                              <Text size="14px">Already have account?</Text>
                              <Button
                                plain
                                label="login"
                                onClick={() => setIsLogin(true)}
                              />
                            </Box>
                          </Box>
                        )}
                      </Form>
                    </Box>
                  </Layer>
                )}
                {showModalSubmit && (
                  <Layer
                    onEsc={() => setShowModalSubmit(false)}
                    onClickOutside={() => setShowModalSubmit(false)}
                  >
                    <Button
                      icon={<Close />}
                      alignSelf="end"
                      onClick={() => setShowModalSubmit(false)}
                    />
                    <Box pad="medium" gap="16px">
                      <Form>
                        <FormField name="username" label="Username" />
                        <FormField name="score" label="Score" />
                        <FormField name="entries" label="Entries" />
                        <Button type="submit" primary label="Submit" />
                      </Form>
                    </Box>
                  </Layer>
                )}
                <Box height="100%" width="100%" overflow={{ vertical: "auto" }}>
                  <Table
                    style={{ width: "80%" }}
                    alignSelf="center"
                    margin={{ vertical: "64px" }}
                  >
                    <TableHeader>
                      <TableRow>
                        <TableCell
                          align="center"
                          scope="col"
                          border="horizontal"
                        >
                          <strong>No</strong>
                        </TableCell>
                        <TableCell scope="col" border="horizontal">
                          <strong>Username</strong>
                        </TableCell>
                        <TableCell
                          align="center"
                          scope="col"
                          border="horizontal"
                        >
                          <strong>Score</strong>
                        </TableCell>
                        <TableCell
                          align="center"
                          scope="col"
                          border="horizontal"
                        >
                          <strong>Entries</strong>
                        </TableCell>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {userData.map((user, index) => (
                        <TableRow key={index}>
                          <TableCell scope="row" align="center" border="bottom">
                            <strong>{index + 1}</strong>
                          </TableCell>
                          <TableCell scope="row" border="bottom">
                            {user.username}
                          </TableCell>
                          <TableCell align="center" border="bottom">
                            {user.score}
                          </TableCell>
                          <TableCell align="center" border="bottom">
                            {user.entries}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Box>
              </Box>
              {!showSidebar || size !== "small" ? (
                <Collapsible direction="horizontal" open={showSidebar}>
                  <Box
                    flex
                    width="medium"
                    background="light-2"
                    elevation="small"
                    align="center"
                    justify="center"
                  >
                    No Events
                  </Box>
                </Collapsible>
              ) : (
                <Layer>
                  <Box
                    background="light-2"
                    tag="header"
                    justify="end"
                    align="center"
                    direction="row"
                  >
                    <Button
                      icon={<Close />}
                      onClick={() => setShowSidebar(false)}
                    />
                  </Box>
                  <Box
                    fill
                    background="light-2"
                    align="center"
                    justify="center"
                  >
                    No Events
                  </Box>
                </Layer>
              )}
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

const AppBar = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px"
    },
    colors: {
      brand: "#02CCBA"
    }
  }
};

export default App;
