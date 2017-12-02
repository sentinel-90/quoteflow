import React from 'react'
import { Breadcrumb } from 'semantic-ui-react'

const BreadcrumbComponent = () => (
    <Breadcrumb size='large'>
        <Breadcrumb.Section link>QuoteFlow</Breadcrumb.Section>
        <Breadcrumb.Divider icon='right angle' />
        <Breadcrumb.Section active>T-Shirt</Breadcrumb.Section>
    </Breadcrumb>
);

export default BreadcrumbComponent