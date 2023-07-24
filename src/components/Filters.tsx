"use client";

import { updateSearchParams } from '@/lib/utils';
import { Select } from '@mantine/core';
import { useRouter } from 'next/navigation';
import React, { FC, useState } from 'react'

interface FiltersProps {
  title : string;
  options : FilterType[];
}

const Filters : FC<FiltersProps> = ({title, options}) => {
  const router = useRouter();
  const [value, setValue] = useState<string | null>(null);

  const handleChange = (value : string) => {
    setValue(value);
    const newPathname = updateSearchParams(title, value.toLowerCase());
    router.push(newPathname);
  }

  return (
    <Select
      placeholder={title}
      searchable
      className='w-[130px]'
      nothingFound="No options"
      data={options}
      value={value}
      onChange={handleChange}
    />
  )
}

export default Filters