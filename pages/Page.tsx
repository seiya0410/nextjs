import { NextPage } from "next";
import styled from "styled-components";

const Badge = styled.span `
 padding: 8px 16px;
 font-weight: bold;
 text-align: center;
 background: red;
 border-radius: 16p;
`

const Page: NextPage = () => {
    return <Badge>Hello World</Badge>
}

export default Page