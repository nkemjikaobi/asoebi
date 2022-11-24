import React from "react";
import { useTable } from "react-table";

interface CustomTableProps {
  columns: Array<any>;
  data: any;
  tableClass?: string;
  tHeadClass?: string;
  tBodyClass?: string;
  tdClass?: string;
  thClass?: string;
  tableHeadTrClass?: string;
  tableBodyTrClass?: string;
}

const CustomTable = ({ columns, data, tableClass, tHeadClass, tBodyClass, tdClass, thClass, tableBodyTrClass, tableHeadTrClass }: CustomTableProps) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <table className={`w-full border bg-asoebiGray-130 border-asoebiGray-120 ${tableClass}`} {...getTableProps()}>
      <thead className={`${tHeadClass}`}>
        {headerGroups.map((headerGroup, index) => (
          <tr className={`${tableHeadTrClass}`} {...headerGroup.getHeaderGroupProps()} key={index}>
            {headerGroup.headers.map((column, index) => (
              <th className={`p-8 text-12 font-bold text-left py-4 ${thClass}`} {...column.getHeaderProps()} key={index}>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className={`space-y-8 ${tBodyClass}`} {...getTableBodyProps()}>
        {rows.map((row, index) => {
          prepareRow(row);
          return (
            <tr className={` !bg-white border border-b-asoebiGray-120 ${tableBodyTrClass}`} {...row.getRowProps()} key={index}>
              {row.cells.map((cell, index) => {
                return (
                  <td className={`font-normal capitalize text-14 p-8  border-[#E0E0E0] ${tdClass}`} {...cell.getCellProps()} key={index}>
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CustomTable;

CustomTable.defaultProps = {
  tableClass: "",
  tHeadClass: "",
  tBodyClass: "",
  tdClass: "",
  thClass: "",
  tableHeadTrClass: "",
  tableBodyTrClass: "",
};
