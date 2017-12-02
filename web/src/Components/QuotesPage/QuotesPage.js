import React, {Component} from 'react';
import DropdownSearchComponent from '../Search/Search';
import { Checkbox, Dropdown, Input, Button } from 'semantic-ui-react';
import './QuotesPage.css';

const defaultSettings = {
    "checkboxCompanyNames": {
        "defaultChecked": true,
        "label": "Show company names"
    },
    "checkboxBrokerNames": {
        "defaultChecked": false,
        "label": "Show broker names"
    },
    "dateRange": {
        "defaultValue": 0,
        "data": [
            { key: '0', text: 'Today', value: 0 },
            { key: '1', text: 'Last 2 days', value: 1 },
            { key: '2', text: 'Last week', value: 2 },
            { key: '3', text: 'Specific period', value: 3 },
        ]
    }
};

const optionsSearch = [
    { key: 'angular', text: 'Angular', value: 'angular' },
    { key: 'css', text: 'CSS', value: 'css' },
    { key: 'design', text: 'Graphic Design', value: 'design' },
    { key: 'ember', text: 'Ember', value: 'ember' },
];

const optionsGroup = [
    { key: 'angular', text: 'Angular', value: 'angular' },
    { key: 'css', text: 'CSS', value: 'css' },
    { key: 'design', text: 'Graphic Design', value: 'design' },
    { key: 'ember', text: 'Ember', value: 'ember' },
];

const companyNames = (e, data) => {
    console.log("companyNames" + data.checked)
};

const brokerNames = (e, data) => {
    console.log("brokerNames" + data.checked)
};

class QuotesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dateRange: 0
        };

        this.dateRange = this.dateRange.bind(this);
    }

    dateRange(event, data){
        this.setState({dateRange: data.value});
    }

    render() {
        return (
            <div>
                <div className="columns-date">
                    <div className="ui form columns-date__columns-change">
                        <div className="fields">
                            <div className="field">
                                <Checkbox
                                    slider
                                    defaultChecked={defaultSettings.checkboxCompanyNames.defaultChecked}
                                    onChange={companyNames}
                                    label={defaultSettings.checkboxCompanyNames.label}
                                />
                            </div>
                            <div className="field">
                                <Checkbox
                                    slider
                                    defaultChecked={defaultSettings.checkboxBrokerNames.defaultChecked}
                                    onChange={brokerNames}
                                    label={defaultSettings.checkboxBrokerNames.label}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="ui form columns-date__date-change">
                        <div className="fields">
                            <div className="field">
                                <Dropdown defaultValue={defaultSettings.dateRange.defaultValue} onChange={this.dateRange} selection options={defaultSettings.dateRange.data} />
                            </div>
                            <div className="field">
                                <Input disabled={this.state.dateRange !== 3} placeholder='Search...' />
                            </div>
                            <div className="field">
                                <Input disabled={this.state.dateRange !== 3} placeholder='Search...' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ui form mb-15">
                    <div className="field">
                        <label>Search</label>
                        <Dropdown
                            placeholder='Search'
                            closeOnChange
                            fluid
                            multiple
                            selection
                            options={optionsSearch}
                        />
                    </div>
                </div>

                <div className="buttons mb-15">
                    <Button basic icon='plus' content='Add' />
                    <Button basic icon='pencil' content='Edit' />
                    <Button basic icon='file outline' content='Copy' />
                    <Button basic icon='copy' content='Duplicate' />
                    <Button basic icon='trash' content='Delete' />
                </div>

                <div className="ui form mb-15">
                    <div className="field">
                        <label>Group By</label>
                        <Dropdown
                            placeholder='Search'
                            closeOnChange
                            fluid
                            multiple
                            selection
                            options={optionsGroup}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default QuotesPage