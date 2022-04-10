import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./TicketTable.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./TableHeader.scss";
import axios from "axios";
import { useState, useEffect, Fragment } from "react";
import FormModal from "./Form/FormModal";
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
} from "reactstrap";
import UpdateTicket from "./Form/UpdateTicket";
import classNames from "classnames";

export default function TicketListTable(props) {
  const { data, projectId, getTicketId, updateTicket, deleteTicket } = props;

  const [selectedTicketData, setSelectedTicketData] = useState(false);
  const [isEditTicketOpen, setIsEditTicketOpen] = useState(false);
  const [selectedTicketId, setSelectedTicketId] = useState("");

  const toggleEditTicket = () => {
    setIsEditTicketOpen(!isEditTicketOpen);
  };

  const resetTicketId = () => setSelectedTicketId(null);

  useEffect(() => {
    const singleTicketURL = `http://localhost:3000/tickets/${selectedTicketId}`;
    const getSingleTicket = axios.get(singleTicketURL);

    Promise.all([getSingleTicket])
      .then((response) => {
        setSelectedTicketData(response[0].data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [selectedTicketId]);

  const getTicketsByProjectID = function (projectId, tickets) {
    const projectTickets = [];
    for (const ticket of tickets) {
      if (ticket.projects_id === projectId) {
        projectTickets.push(ticket);
      }
    }
    return projectTickets;
  };

  const projectUsersRevised = function (projectTickets, users) {
    const revisedTickets = projectTickets.map((ticket) => {
      let resultingData = { ...ticket };

      const foundUser = users.find((user) => {
        if (user.id === ticket.users_id) {
          return user.first_name + " " + user.last_name;
        }
      });
      resultingData.author = foundUser || null;
      return resultingData;
    });
    return revisedTickets;
  };

  const projectTickets = getTicketsByProjectID(projectId, data.tickets);
  const tickets = projectUsersRevised(projectTickets, data.users).sort(
    (a, b) => a.id - b.id
  );

  const ticketClass = classNames("list__item", {
    "list__item--selected": props.selected,
  });

  return (
    <Fragment>
      <TableContainer
        style={{
          overflow: "hidden",
          borderLeft: "1px solid rgb(179, 174, 174)",
          borderRight: "1px solid rgb(179, 174, 174)",
        }}
      >
        <Table
          className="projecttable"
          sx={{ height: 140 }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow className="tabletitle">
              <TableCell className="tabletitle">Title</TableCell>
              <TableCell className="tabletitle">Description</TableCell>
              <TableCell className="tabletitle">Author</TableCell>
              <TableCell className="tabletitle"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tickets.map((row) => (
              <TableRow
                className={ticketClass}
                selected={row.id === selectedTicketId}
                key={row.id}
                onClick={() => setSelectedTicketId(row.id)}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  onClick={() => getTicketId(row.id)}
                  component="th"
                  scope="row"
                >
                  {row.title}
                </TableCell>

                <TableCell onClick={() => getTicketId(row.id)}>
                  {row.description}
                </TableCell>
                <TableCell onClick={() => getTicketId(row.id)}>
                  {row.author.first_name + " " + row.author.last_name}
                </TableCell>
                <TableCell>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-icon-only text-light"
                      role=""
                      size="sm"
                      color="#585858"
                      backgroundColor="#585858"
                      id={row.id}
                      onClick={() => setSelectedTicketId(row.id)}
                    >
                      <MoreVertIcon className="more-options" />
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-arrow" end>
                      <DropdownItem id={row.id} onClick={toggleEditTicket}>
                        Edit Ticket
                      </DropdownItem>
                      <DropdownItem onClick={() => deleteTicket(row.id)}>
                        Delete Ticket
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <FormModal handleOpen={isEditTicketOpen} onClose={toggleEditTicket}>
        {selectedTicketData && (
          <UpdateTicket
            id={selectedTicketId}
            onClose={toggleEditTicket}
            tickets={tickets}
            resetTicketId={resetTicketId}
            ticketData={selectedTicketData}
            // ticketTeam={selectedTicketTeam}
            updateTicket={updateTicket}
            // allUsers={allUsers}
          />
        )}
      </FormModal>
    </Fragment>
  );
}
