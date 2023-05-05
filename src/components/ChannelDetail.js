import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
import { fetchFromApi } from "../utils/fetchFromApi";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromApi(`channels?part="snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
  });

  return <div>ChannelDetail</div>;
};

export default ChannelDetail;
