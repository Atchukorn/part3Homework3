import { Component, OnInit, } from '@angular/core';
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
    menuNodes = [
    {
      id: 1,
      name: 'Catalog',
      children: [
        { id: 2, name: 'Products' },
        { id: 3, name: 'Categories' },
        { id: 3, name: 'Manufactures' },
        { id: 5, name: 'Product reviews' },
        { id: 6, name: 'Product tags' },
        { id: 7, name: 'Attributes' },
        ],
    },
    {
      id: 8,
      name: 'Sales',
      children: [
        { id: 9, name: 'Orders' },
        { id: 10, name: 'Shipments' },
        { id: 11, name: 'Return requests' },
        { id: 12, name: 'Recurring payments' },
        { id: 12, name: 'Gift cards' },
        { id: 14, name: 'Shopping cards and wishlists' },
        ],
    },
    {
      id: 15,
      name: 'Customers',
      children: [
        { id: 16, name: 'Customers' },
        { id: 17, name: 'Customer roles' },
        { id: 18, name: 'Online customers' },
        { id: 19, name: 'Vendors' },
        { id: 20, name: 'Activity log' },
        { id: 21, name: 'Activities Types' },
        { id: 22, name: 'GDPR requests (log)' },
        ],
    },
    {
      id: 23,
      name: 'Promotions',
      children: [
        { id: 24, name: 'Discounts' },
        { id: 25, name: 'Affiliates' },
        { id: 26, name: 'Newsletter subscibers' },
        { id: 27, name: 'Campaigns' },
        ],
    },
    {
      id: 28,
      name: 'Contents management',
      children: [
        { id: 29, name: 'Topics (pages)' },
        { id: 30, name: 'Message templates' },
        { id: 31, name: 'News items' },
        { id: 32, name: 'News comments' },
        { id: 33, name: 'Blog posts' },
        { id: 34, name: 'Blog comments' },
        { id: 35, name: 'Polls' },
        { id: 36, name: 'Forums' },
        ],
    },
    {
      id: 37,
      name: 'Configuration',
      children: [
        { id: 38, name: 'Setting' },
        { id: 39, name: 'Email accounts' },
        { id: 40, name: 'Stores' },
        { id: 41, name: 'Countries' },
        { id: 42, name: 'Languages' },
        { id: 43, name: 'Payment methods' },
        { id: 44, name: 'Payment restrictions' },
        { id: 45, name: 'Tax providers' },
        { id: 46, name: 'Tax categories' },
        { id: 47, name: 'Shipping' },
        { id: 48, name: 'Access Control lists' },
        { id: 49, name: 'Widgets' },
        { id: 50, name: 'Authenthication' },
        { id: 51, name: 'Localplugins' },
        { id: 52, name: 'All plugins and themes' },
        ],
    },
    {
      id: 53,
      name: 'Systems',
      children: [
        { id: 54, name: 'System information' },
        { id: 55, name: 'Log' },
        { id: 56, name: 'Warnings' },
        { id: 57, name: 'Maintenance' },
        { id: 58, name: 'Message queue' },
        { id: 59, name: 'Schedule tasks' },
        { id: 60, name: 'search engine friendlys page names' },
        { id: 61, name: 'Templates' },
        ],
    },
    {
      id: 62,
      name: 'Reports',
      children: [
        { id: 63, name: 'Sales summary' },
        { id: 64, name: 'Low stock' },
        { id: 65, name: 'Bestsellers' },
        { id: 66, name: 'Products never purchased' },
        { id: 67, name: 'Country sales' },
        { id: 68, name: 'Customer reports' },
        ],
    },
    {
      id: 69,
      name: 'Help',
      children: [
        { id: 70, name: 'Help Topics' },
        { id: 71, name: 'Community forums' },
        { id: 72, name: 'Premium support services' },
      ],
    },
  ];
  options = {};
}
