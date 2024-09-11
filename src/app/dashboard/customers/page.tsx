// import * as React from 'react';
// import type { Metadata } from 'next';
// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
// import Typography from '@mui/material/Typography';
// import { Download as DownloadIcon } from '@phosphor-icons/react/dist/ssr/Download';
// import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
// import { Upload as UploadIcon } from '@phosphor-icons/react/dist/ssr/Upload';
// import dayjs from 'dayjs';

// import { config } from '@/config';
// import { CustomersFilters } from '@/components/dashboard/customer/customers-filters';
// import { CustomersTable } from '@/components/dashboard/customer/customers-table';
// import type { Customer } from '@/components/dashboard/customer/customers-table';

// export const metadata = { title: `Customers | Dashboard | ${config.site.name}` } satisfies Metadata;

// const customers = [
//   {
//     id: 'USR-010',
//     name: 'Alcides Antonio',
//     avatar: '/assets/avatar-10.png',
//     email: 'alcides.antonio@devias.io',
//     phone: '908-691-3242',
//     address: { city: 'Madrid', country: 'Spain', state: 'Comunidad de Madrid', street: '4158 Hedge Street' },
//     createdAt: dayjs().subtract(2, 'hours').toDate(),
//   },
//   {
//     id: 'USR-009',
//     name: 'Marcus Finn',
//     avatar: '/assets/avatar-9.png',
//     email: 'marcus.finn@devias.io',
//     phone: '415-907-2647',
//     address: { city: 'Carson City', country: 'USA', state: 'Nevada', street: '2188 Armbrester Drive' },
//     createdAt: dayjs().subtract(2, 'hours').toDate(),
//   },
//   {
//     id: 'USR-008',
//     name: 'Jie Yan',
//     avatar: '/assets/avatar-8.png',
//     email: 'jie.yan.song@devias.io',
//     phone: '770-635-2682',
//     address: { city: 'North Canton', country: 'USA', state: 'Ohio', street: '4894 Lakeland Park Drive' },
//     createdAt: dayjs().subtract(2, 'hours').toDate(),
//   },
//   {
//     id: 'USR-007',
//     name: 'Nasimiyu Danai',
//     avatar: '/assets/avatar-7.png',
//     email: 'nasimiyu.danai@devias.io',
//     phone: '801-301-7894',
//     address: { city: 'Salt Lake City', country: 'USA', state: 'Utah', street: '368 Lamberts Branch Road' },
//     createdAt: dayjs().subtract(2, 'hours').toDate(),
//   },
//   {
//     id: 'USR-006',
//     name: 'Iulia Albu',
//     avatar: '/assets/avatar-6.png',
//     email: 'iulia.albu@devias.io',
//     phone: '313-812-8947',
//     address: { city: 'Murray', country: 'USA', state: 'Utah', street: '3934 Wildrose Lane' },
//     createdAt: dayjs().subtract(2, 'hours').toDate(),
//   },
//   {
//     id: 'USR-005',
//     name: 'Fran Perez',
//     avatar: '/assets/avatar-5.png',
//     email: 'fran.perez@devias.io',
//     phone: '712-351-5711',
//     address: { city: 'Atlanta', country: 'USA', state: 'Georgia', street: '1865 Pleasant Hill Road' },
//     createdAt: dayjs().subtract(2, 'hours').toDate(),
//   },

//   {
//     id: 'USR-004',
//     name: 'Penjani Inyene',
//     avatar: '/assets/avatar-4.png',
//     email: 'penjani.inyene@devias.io',
//     phone: '858-602-3409',
//     address: { city: 'Berkeley', country: 'USA', state: 'California', street: '317 Angus Road' },
//     createdAt: dayjs().subtract(2, 'hours').toDate(),
//   },
//   {
//     id: 'USR-003',
//     name: 'Carson Darrin',
//     avatar: '/assets/avatar-3.png',
//     email: 'carson.darrin@devias.io',
//     phone: '304-428-3097',
//     address: { city: 'Cleveland', country: 'USA', state: 'Ohio', street: '2849 Fulton Street' },
//     createdAt: dayjs().subtract(2, 'hours').toDate(),
//   },
//   {
//     id: 'USR-002',
//     name: 'Siegbert Gottfried',
//     avatar: '/assets/avatar-2.png',
//     email: 'siegbert.gottfried@devias.io',
//     phone: '702-661-1654',
//     address: { city: 'Los Angeles', country: 'USA', state: 'California', street: '1798 Hickory Ridge Drive' },
//     createdAt: dayjs().subtract(2, 'hours').toDate(),
//   },
//   {
//     id: 'USR-001',
//     name: 'Miron Vitold',
//     avatar: '/assets/avatar-1.png',
//     email: 'miron.vitold@devias.io',
//     phone: '972-333-4106',
//     address: { city: 'San Diego', country: 'USA', state: 'California', street: '75247' },
//     createdAt: dayjs().subtract(2, 'hours').toDate(),
//   },
// ] satisfies Customer[];

// export default function Page(): React.JSX.Element {
//   const page = 0;
//   const rowsPerPage = 5;

//   const paginatedCustomers = applyPagination(customers, page, rowsPerPage);

//   return (
//     <Stack spacing={3}>
//       <Stack direction="row" spacing={3}>
//         <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
//           <Typography variant="h4">Customers</Typography>
//           <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
//             <Button color="inherit" startIcon={<UploadIcon fontSize="var(--icon-fontSize-md)" />}>
//               Import
//             </Button>
//             <Button color="inherit" startIcon={<DownloadIcon fontSize="var(--icon-fontSize-md)" />}>
//               Export
//             </Button>
//           </Stack>
//         </Stack>
//         <div>
//           <Button startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />} variant="contained">
//             Add
//           </Button>
//         </div>
//       </Stack>
//       <CustomersFilters />
//       <CustomersTable
//         count={paginatedCustomers.length}
//         page={page}
//         rows={paginatedCustomers}
//         rowsPerPage={rowsPerPage}
//       />
//     </Stack>
//   );
// }

// function applyPagination(rows: Customer[], page: number, rowsPerPage: number): Customer[] {
//   return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
// }

'use client';

import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';
import { Download as DownloadIcon } from '@phosphor-icons/react/dist/ssr/Download';
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
import { Upload as UploadIcon } from '@phosphor-icons/react/dist/ssr/Upload';

import { CustomersFilters } from '@/components/dashboard/customer/customers-filters';

interface Customer {
  id: string;
  name: string;
  avatar: string;
  email: string;
  phone: string;
  address: {
    city: string;
    country: string;
    state: string;
    street: string;
  };
  createdAt: Date;
}

interface PaginatedResponse {
  data: Customer[];
  total: number;
}

export default function Page(): React.JSX.Element {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: 5,
  });

  useEffect(() => {
    fetchCustomers(paginationModel.page, paginationModel.pageSize);
  }, [paginationModel.page, paginationModel.pageSize]);

  const fetchCustomers = async (page: number, pageSize: number) => {
    try {
      const response = await fetch(`http://localhost:3000/auth/users?page=${page + 1}&pageSize=${pageSize}`);
      const data: FetchCustomersResponse = await response.json();
      setCustomers(data.customers);
      setTotal(data.total);
    } catch (error) {
      console.error('Error fetching customers:', error);
    }
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'phone', headerName: 'Phone', width: 150 },
    // {
    //   field: 'address',
    //   headerName: 'Address',
    //   width: 300,
    //   valueGetter: (params: any) =>
    //     `${params.row.address.street}, ${params.row.address.city}, ${params.row.address.state}, ${params.row.address.country}`,
    // },
    // {
    //   field: 'createdAt',
    //   headerName: 'Created At',
    //   width: 200,
    //   valueGetter: (params: any) => new Date(params.row.createdAt).toLocaleDateString(),
    // },
  ];

  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">Customers</Typography>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <Button color="inherit" startIcon={<UploadIcon fontSize="var(--icon-fontSize-md)" />}>
              Import
            </Button>
            <Button color="inherit" startIcon={<DownloadIcon fontSize="var(--icon-fontSize-md)" />}>
              Export
            </Button>
          </Stack>
        </Stack>
        <div>
          <Button startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />} variant="contained">
            Add
          </Button>
        </div>
      </Stack>
      <CustomersFilters />
      <div style={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={customers}
          columns={columns}
          paginationMode="server"
          rowCount={total}
          pageSizeOptions={[5, 10, 20]}
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
        />
      </div>
    </Stack>
  );
}
