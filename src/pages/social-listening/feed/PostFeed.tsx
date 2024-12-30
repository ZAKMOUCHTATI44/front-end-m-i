import React from 'react'
import { Card, Typography, Box, Button } from '@mui/material'
import Icon from 'src/@core/components/icon'

const PostFeed = () => {
  const data = [
    {
      title: 'Mango Maroc | Mode en ligne',
      logo: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBAUGB//EADUQAAEEAQIDBAcHBQAAAAAAAAEAAgMRBAUSITFBBhNRoSJCYXGBkbEHFDJywdHwFSOiwtL/xAAZAQACAwEAAAAAAAAAAAAAAAAABAIDBQH/xAAfEQACAwACAgMAAAAAAAAAAAAAAQIDEQQhEjIiQVH/2gAMAwEAAhEDEQA/AO5QhKpCgIQgIAbK2V7CzHc1szyGMc4WGkmrI61d0uf1T7KdEyA+bLmzp8txuTIfPxcfouoxCBkxkmgHAo11mpjAymszY2yzPDcZ4YB3Yo2DzvlzS1zaY9xIpo8/7LaZk9le1X9GiyJZtKzMd8kQkdeyRpBNeHC/f8F3ixsfFvJxnTz95PCSQ48CSQbFe5a9qdE3OPZXy4KFnQo5pTyTbSq4VBCRCNOoEIQg4CEIQAc+Ck1XHy9WZjPxNRyMXuHAywRRxuEnxcLHX+cVEp8bIdC2TunU78tqi9pR0Z4smp9GXqE2NpwGbljaAS26si/AJ2FqeDni8PLil9jXekPeOYU2biMyZGS5jnSObxaDwr210TsbCxRC9sTBHTb9H1rvn4pWu5wWYNXUq17o4OFAg2CltYeiRMwc3OxYy7Y9/fBpPAE86HToti09XNTjpn2Q8JYSWhMtLamQHI6ISIAVCRJa4BPHAJYiS6gXbf3UzGtaRGBTR0CdghzoKZV7+vwSujMbh43x96z7tc2aNCSgsIJjsksi9o5eKyoM4v1h+O1tMdjOeD+Vzf8AorZ1Pu/u/P0j0XEuyXx6/pbo7/uZZid7Q6N4+tH4KtLWXNlySXb2iZtunjafkT+y2Nyw8lvd69jn20fktjcnON6sQ5XUyS0oKi3I3JkWLSQoSLh0VIkSE8UAXMV7mMj2+vLt8ldcx25vhzVfAZcLHHo419Fec6uA6hZ1j2bNKpfBGHrEmwehxFea5DUTJHLgyQAuljzYHgeI3jd/iXLo9Vkc8ytBo0QPZ/KWBgtEupYbX89znN94aR/soR7mkWT6i2X9WZt7RY/gRfBX7VDWbf2kha26YPHw4q3ac4vqxHleyJNyNyjtAKZFTQKQlBKaVwkKSm2glOhG+aNvi4DzXH0CWm1js7uNrDXAKPLm2AkDiFYe5rSAeqqZLA6+N3wWXJmvHpHOZIJefbd+awo5Pu/anRGj8MuQ+M37Yy4ebQuty4GhoceRK5Gd0Tu1+htcQO6mkmeS4cNsTq8y1EPYJ9rDWyrf2hld0a0/orBKpYrjJmZcpPrBvkrZK0OOsgZvJltjFtAKZaFcUGmSmkpU0oOgSp9Pr73GXcgQPmaHmVXKu6PAzJySyW9obvoGuIIIVdjyLLKu5ov5rqohVROXuawmyeikzCdrv51VfHAOZx9Vjj8qH6rMNX6INXnbDCXkjgvE9fbLnatqgzMrbHjvjmYJYC6KugJHHjx4Vxt3KuPqPaiV+9jL9Em6WR2VyO4zO0VRRP7x8Ebg9u4FvcSO+qnXLxbYYniZzv2dYQGqajmx5jHNDWsfFjteItzuJ/GBxFdPFd6So8eu5aGsYxosBrGhoFE9E8rSrl5RTMq9ZY1+BaEiFIpP/9k=',
      platform: 'https://shop.mango.com',
      visits: '2M',
      influence_score: '10/10',
      date: '9 oct. 2024',
      sentiment: 'Neutral',
      description:
        "Découvrez les dernières tendances en matière de mode, de chaussures et d'accessoires chez Mango . Magasinez les meilleurs looks de la saison et habillez-vous ..."
    },
    {
      title: 'Mode femme 2024 | Mango Maroc',
      logo: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAABAAIGBwMEBQj/xAA6EAABAwMBBAcGBAUFAAAAAAABAAIDBAURIQYHEjETQVFVYXHRFCKBkZKhMqLBwhZTYnKCIyQlMzX/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQMC/8QAGhEBAQEBAQEBAAAAAAAAAAAAABEBIQISA//aAAwDAQACEQMRAD8AtTKBKCSAgo5TUkDspksgjjdI44a0EnyCK5u0VVFRWG41c7XOihppHua04LgGnQHx5IY1Ky+PpHsfNERC8jUD8IPau4DkZCpqp2xss1Px8Nbx5MjozM85cebQCcadXUrT2euNPdrNSV1GJRBLGOESjDhjTXxyFn4+rtafpnnJHUyllBHC0ZgilhHCoakkkoEkkkg1LrXQ2u21NfUnENPE6R3jgcvjyVFX7b+/XuKenfMymo5mljqeFgwWnqLiMn7Kdb57sae0Utrjdh1W/pJP7GdXxcR8iqdjxxe9kN68BXEYyMnRWZu227mhqKCw3CKL2V2IIJmAhzHH8Idrrk6Z8VXDQOL3yQMdQyslHUGkraeqHOCVko/xcD+io9RhOCYxwc0ObqDqPJPHJcqKSSKDGkkkgSKCSChdt6W63XeDU0FS7NRLM2GlByGCI/gxzOME5PbxKUN3QR+wyGW6OFbwEs6KPEIdjQEHLiM89R5KwaiyUVZeqG6zR/7uiDxG8dYcCMHyzkdnxXQIdjLeYTdHmu7WG42aZkV0p/Z+MkNeXBzTjyyuVjOnaFKt5Dqlm1NRS1MnG2nDRF5OaDnz9FF+xXLOp6l49J7LVXtmzdrqCcmSkiJPjwjK64Kie7Kfp9irbr/1tfH9L3BStRTkk0JyBiSCSApFBAnRBjkke1zQyQMBPW3Ki9VvEsVvl6GumeJeEO/0mGQYOetucHTlzUknkDY3FwGBrnsXmuqAqKt5pmEmeYmNg5nidoB46gKRHT23u9Pfdpqu4UfH7PJwCPjbg4DQDp55XNt9tq7lI9lFCZXRt43gEaBSDabYx1hs7K6StEzy9rHxCLAaSDyOddR2LqbqLdJUPrasSNbGC2FwweI9eh8jj4rrbOLkvU43YUddbtmRS3Klkp5GzvLWPxktODnTxJUxC1oOS2AoCnJqKoblDKCWVAcoEpJpKI4m19UaLZu5VDebYHAeBOmfhnKqbdtbmV+0ntDgDHQx9I0f1nRv7j5gK39oqX26yXCkxkzU0jAPEtOFUe6et6HaGWmP4aunPPnxN94fYvVEs3nszslK7qZPET9WP1Wtudb/AMLXO7a0j5Rs9Vsb1Juj2XEX8+pjafhl37Qs26qnMWyzJCMdNPI/zweH9qCdwnRbDTotaJZ2qKeimhEKhmUMqmDtTfe9J/t6I/xTfe85/wAvooi5sppKpsbWX/vOb6W+iR2sv3ecv0t9FRb8hVN7N0DaDelJS492Cacx+RY4t/K5KTau/Y/9OX6Wei4Ju1e2/m4iqeKxw1mwMn3cdmOSCcb23ufbrbSxjillqi5rRzOGkY+bgpnYqFtrtNHQtOeghawntIGp+JyVS1feLlV3Kknqat8stPrC9wb7hznTTHMD5Lps2qv3ek30t9EF2RlZ2lUrFtVfu85vpb6LONqr73nN8m+iguXKdlUx/FN97zn+3oiNqL53nUfNUf/Z',
      platform: 'https://shop.mango.com',
      visits: '50 K',
      influence_score: '10/10',
      date: 'Il y a 1 mois',
      sentiment: 'Neutral',
      description:
        "New Now. Bottines 100 % cuir suédé. Prix actuel [749,00 MAD]749,00 MAD. Blazer costume cintré - Plan moyen. Blazer costume cintré - Détail de l'article 4."
    },
    {
      title: 'Vêtements 2024 | MANGO Maroc',
      logo: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAACAAEHCAMFBgT/xAA7EAABAwMBBQUFBAoDAAAAAAABAAIDBAURBgcSITFREzJBYYEUInGRoRWCkrFCUmJjdLLBwuHxFjVD/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EABoRAQEBAQEBAQAAAAAAAAAAAAABAhESAyH/2gAMAwEAAhEDEQA/AJdCcIQnWmDp0yIIEFoNTautmnJYIKtz5aqfuQRY3sdTnkFvnPbGxz3kNa0ZJPgFCFgvNVd9V3S7ezmrEsohY/IAijyccD5bqzvXmdb+ePeuJM0pra16mkfBTb8NUxu92MvNzerT4rplXTUFfW2bU9PeoKd9JK474aHhzXkcM8PAjAVhaSdtVSw1DCC2WNrxjoRlMa9TpvHm8ZkySYrTBFMmJQ7yAQjWMIgUBpwhCdBoNf3L7L0jc52uxI6B0ceDg7zhjh81X7SF0lpq2ppo97sp2ZcW82kH/K6nahf5rvqqptjZXGipSImxA+6Xge87HXJI+6uX0zdLfabvK+spDNSubuAx95hB7wHj/pY+k7muvyvnUotX1cs01MH5MbAQ1xGPh8FO2zO4Cu0db2kjtKdnYuA6NJDfjwAUJ6nvtBd5Yae2UboYWuy6SQDeecHhgZwF5rVqO5WCcfZtTJDukOLGu91/jxHip85ZP1ftqa12LPZQkoIZm1EEc8fclYHt+BGQnJXRxJxQpEoUCCJACiBQGCmllZBE+aU4jjaXuPQAZKQK5jabcPs7Qt2lGd6aL2duP3hDD9CT6IK+y1wndV3CQYnqZHPPHul5yfqSvE1zAMDksNQ7MLWjxdlC3AbzRp6WzMa5vUFZqmRj3tx3srWvHjvYXre1pibN2mJBKG7mObSCc+mMeoUFndF1HtOkLLL1ooh8mgf0W4K5LZTMZdBW3e5sMrPlI5dYVWSQpyhygQRBMEQCBwo0271nZaft1G12DPVGQjq1jCPze1SYAoV281Pa3u2UbMl0VK5+6Or3Y/sQiKpu7FhEGZAy5KdvvsA/RanBwOKjQZI244IzkMBzwJBTEbwRc4W+WB9UE+7F5S/RZYf/ACrJGj4ENd+ZK7tR9sQz/wARqM8vbn4/AxSCVWQlCiKFAYCMBIBEAgWFHW0hlupr3b7hcKOPEYa7tzHvZDHbx5DJwByPU9VI4ChvbVV+16ho7a0nFLQyzuGefuueR+GIfNTU7Gsa83qJyD3nABx4kDkD0HksMnMLO89V2ei9JCv0tqTUVbFmGloJ2UgcOcoYS5/3RwHmT0QcS0cFudKWgXWvcyaIyU8TC97QceBPP4NcfRacDCmbYxYYavTtyqatrw2pqmx4a7d32Rt8ceGZHfJSy2fjWbJe11mzm109s0zGyma9rZpXykPdnjnHD0aF0xRRQxwRMihYGRsaGtaOQCRCsnIxq9vQEIUZCFVGUJwmCIINdqW7Msdgr7pJg+zQue1p/SdyaPU4CrVX3StqQa2tqZKisljMT6iU5c5rmFpH4SR6qXdu1VLFpmgpmOxFU1rRKP1g1rnAfMA+ihK5OLXMhHcaWkfJFjzuzgloyccB1VmzZIbXs5ns0LQGR2uWN37TjG7eJ8y4k+qrlYY2zX22RScWPrIWuHkZGgq1F6/6m4fw0v8AKVIVUvxyOSslsqpPZNA2keMzHTnz33Fw+hCrXyaMdFa3TELKfTVphiGGR0ULWjyDArCtkUKIoUQJQI3IUH//2Q==',
      platform: 'Madame Figaro',
      visits: '114M',
      influence_score: '10/10',
      date: '25 jan. 2024',
      sentiment: 'Neutral',
      description:
        "New Now. Bottines 100 % cuir suédé. Prix actuel [749,00 MAD]749,00 MAD. Blazer costume cintré - Plan moyen. Blazer costume cintré - Détail de l'article 4."
    },
    {
      title: 'Mango opens a new store in Morocco',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdPzKoCHZQAE1Kjj2H7RqbvQ3P7CPEdpynS9InsN-dPNgoVJ8y_4iy&usqp=CAE&s',
      platform: 'mangofashiongroup.com',
      visits: '114M',
      influence_score: '10/10',
      date: '25 août 2023',
      sentiment: 'Neutral',
      description:
        'The store , which has a surface area of 600 m 2 , is located in the popular Morocco  Mall, the largest shopping centre in Africa, with a surface area of 190,000 m².'
    }
  ]

  return (
    <div>
      {data.map((item, index) => (
        <Card sx={{ margin: '10px', padding: 3 }} key={index}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src={item.logo} alt={item.platform} width={75} height={75} style={{ borderRadius: '50%' }} />
            <Box>
              <Typography variant={'h5'}>{item.title}</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '5px' }}>
                <Typography variant='subtitle2'>{item.platform}</Typography>
                <Typography variant='subtitle2'>{item.visits}</Typography>
                <Typography variant='subtitle2'>Influence score {item.influence_score} </Typography>
              </Box>
            </Box>
          </Box>
          <Typography sx={{ padding: 2 }}>{item.description}</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '20px' }}>
            <Button
              color='success'
              variant='outlined'
              size='small'
              sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}
            >
              <Icon icon='tabler:eye' fontSize={20} />
              Visit
            </Button>
            <Button
              color='warning'
              variant='outlined'
              size='small'
              sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}
            >
              <Icon icon='tabler:tags' fontSize={20} />
              Tags
            </Button>
            <Button
              color='error'
              variant='outlined'
              size='small'
              sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}
            >
              <Icon icon='tabler:trash' fontSize={20} />
              Delete
            </Button>
            <Button
              color='secondary'
              variant='outlined'
              size='small'
              sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}
            >
              <Icon icon='tabler:file-text' fontSize={20} />
              Add to PDF report
            </Button>
          </Box>
        </Card>
      ))}
    </div>
  )
}

export default PostFeed
